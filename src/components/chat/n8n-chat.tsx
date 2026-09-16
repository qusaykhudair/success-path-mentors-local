'use client';

import { useEffect, useState } from 'react';

type N8nChatLocale = 'en' | 'ar' | 'de';

interface N8nChatProps {
  locale: N8nChatLocale;
}

declare global {
  interface Window {
    __fetchIntercepted?: boolean;
  }
}

const tabSessionStorageKey = 'spm-chat/sessionId';

/**
 * Safely polyfills/wraps storage so that Safari Private Browsing mode
 * or locked-down storage policies never throw QuotaExceededError or SecurityError.
 */
function ensureSafeStorage(): void {
  if (typeof window === 'undefined') return;

  const memoryStore = new Map<string, string>();

  const isStorageWorking = (storage: Storage): boolean => {
    try {
      const testKey = '__spm_storage_test__';
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  };

  try {
    if (!isStorageWorking(window.localStorage)) {
      const fallbackStorage: Partial<Storage> = {
        getItem: (key: string) => memoryStore.get(key) ?? null,
        setItem: (key: string, value: string) => {
          memoryStore.set(key, String(value));
        },
        removeItem: (key: string) => {
          memoryStore.delete(key);
        },
        clear: () => {
          memoryStore.clear();
        },
        key: (index: number) => Array.from(memoryStore.keys())[index] ?? null,
        get length() {
          return memoryStore.size;
        },
      };

      try {
        Object.defineProperty(window, 'localStorage', {
          value: fallbackStorage,
          configurable: true,
          writable: true,
        });
      } catch {
        // Direct assignment fallback
        (window as unknown as { localStorage: typeof fallbackStorage }).localStorage = fallbackStorage;
      }
    }
  } catch {
    // If full replacement fails, safely patch setItem to prevent crashes
    try {
      const originalSetItem = window.localStorage.setItem.bind(window.localStorage);
      window.localStorage.setItem = (key: string, value: string) => {
        try {
          originalSetItem(key, value);
        } catch {
          memoryStore.set(key, String(value));
        }
      };
    } catch {
      // Ignore
    }
  }
}

function getPersistentSessionId(): string {
  const getUUID = () => {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  try {
    const existingSessionId =
      window.sessionStorage.getItem(tabSessionStorageKey);
    const sessionId = existingSessionId ?? getUUID();

    /*
     * sessionStorage survives a refresh but is isolated per browser tab.
     * Passing the value explicitly prevents @n8n/chat from replacing the
     * active tab's session with its origin-wide localStorage value.
     */
    window.sessionStorage.setItem(tabSessionStorageKey, sessionId);
    window.localStorage.removeItem(tabSessionStorageKey);

    return sessionId;
  } catch {
    // Storage can be unavailable in locked-down browsers.
    return getUUID();
  }
}

const chatCopy = {
  en: {
    title: 'Success Path Mentors Assistant',
    subtitle: 'Ask about subjects, pricing, tutors, or your free trial lesson.',
    getStarted: 'Start a conversation',
    inputPlaceholder: 'Type your question...',
    closeButtonTooltip: 'Close chat',
    initialMessages: [
      'Welcome to Success Path Mentors 👋',
      'How can we help you today?',
    ],
  },
  ar: {
    title: 'مساعد Success Path Mentors',
    subtitle: 'اسأل عن المواد أو الأسعار أو المعلمين أو الحصة التجريبية المجانية.',
    getStarted: 'ابدأ المحادثة',
    inputPlaceholder: 'اكتب سؤالك هنا...',
    closeButtonTooltip: 'إغلاق المحادثة',
    initialMessages: [
      'مرحباً بك في Success Path Mentors 👋',
      'كيف يمكننا مساعدتك اليوم؟',
    ],
  },
  de: {
    title: 'Success Path Mentors Assistent',
    subtitle: 'Fragen Sie nach Fächern, Preisen, Lehrkräften oder Ihrer kostenlosen Probestunde.',
    getStarted: 'Gespräch beginnen',
    inputPlaceholder: 'Schreiben Sie Ihre Frage hier...',
    closeButtonTooltip: 'Chat schließen',
    initialMessages: [
      'Willkommen bei Success Path Mentors 👋',
      'Wie können wir Ihnen heute helfen?',
    ],
  },
} as const;

/**
 * Loads the official n8n chat widget only in the browser.
 * Uses /api/chat proxy to eliminate CORS & Safari ITP issues,
 * and safeguards loadPreviousSession to ensure the message input field
 * always renders reliably.
 */
export function N8nChat({ locale }: N8nChatProps) {
  const [requested, setRequested] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const openLabel = locale === 'ar' ? 'افتح المحادثة' : locale === 'de' ? 'Chat öffnen' : 'Open chat';

  useEffect(() => {
    if (!requested) return;
    const target = document.getElementById('n8n-chat');

    if (!target) {
      return;
    }

    /*
     * React Strict Mode runs effects twice in development. The marker prevents
     * the n8n widget from being mounted twice in the same target element.
     */
    if (target.dataset.initialized === 'true') {
      return;
    }

    target.dataset.initialized = 'true';

    // Ensure Safari Private Browsing doesn't crash on localStorage operations
    ensureSafeStorage();

    // Use internal /api/chat proxy for same-origin reliability (zero CORS, zero Safari ITP blocks)
    const webhookUrl = `${window.location.origin}/api/chat`;

    let cancelled = false;
    let chatApp: { unmount: () => void } | null = null;
    let observer: MutationObserver | null = null;

    /*
     * Resilient fetch interceptor for @n8n/chat:
     * Guarantees that if loadPreviousSession experiences a network error,
     * timeout, or server error, it gracefully returns { data: [] } with status 200.
     * This prevents @n8n/chat from crashing or leaving the session in an uninitialized
     * state where "Powered by n8n" replaces the message input field.
     */
    if (!window.__fetchIntercepted) {
      window.__fetchIntercepted = true;
      const originalFetch = window.fetch;

      window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
        const url = args[0];
        const options = args[1];

        const isChatCall =
          typeof url === 'string' &&
          (url.includes('/api/chat') || url.includes('/chat'));

        if (isChatCall && options && typeof options.body === 'string') {
          try {
            const body = JSON.parse(options.body) as Record<string, unknown>;

            if (body.action === 'loadPreviousSession') {
              try {
                const response = await originalFetch(...args);
                if (response.ok) {
                  return response;
                }
                console.warn(
                  '[N8nChat] loadPreviousSession returned non-200 status:',
                  response.status
                );
                // Return safe empty session fallback so the input box renders immediately
                return new Response(JSON.stringify({ data: [] }), {
                  status: 200,
                  headers: { 'Content-Type': 'application/json' },
                });
              } catch (networkError) {
                console.warn(
                  '[N8nChat] loadPreviousSession fetch failed, using fallback:',
                  networkError
                );
                return new Response(JSON.stringify({ data: [] }), {
                  status: 200,
                  headers: { 'Content-Type': 'application/json' },
                });
              }
            }
          } catch {
            // Not a JSON payload, proceed normally
          }
        }

        return originalFetch(...args);
      };
    }

    const initializeChat = async () => {
      try {
        const [{ createChat }] = await Promise.all([
          import('@n8n/chat'),
          // @ts-expect-error CSS file has no typescript declarations
          import('@n8n/chat/style.css'),
        ]);

        if (cancelled) {
          return;
        }

        const copy = chatCopy[locale];
        const sessionId = getPersistentSessionId();

        chatApp = createChat({
          webhookUrl,
          webhookConfig: {
            method: 'POST',
            headers: {},
          },
          target: '#n8n-chat',
          mode: 'window',
          chatInputKey: 'chatInput',
          chatSessionKey: 'sessionId',
          sessionId,
          /*
           * Reuses session ID stored per tab to maintain context across refreshes.
           */
          loadPreviousSession: true,
          metadata: {
            source: 'success-path-mentors-website',
            locale,
            page: window.location.pathname,
          },
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [...copy.initialMessages],
          i18n: {
            en: {
              title: copy.title,
              subtitle: copy.subtitle,
              footer: '',
              getStarted: copy.getStarted,
              inputPlaceholder: copy.inputPlaceholder,
              closeButtonTooltip: copy.closeButtonTooltip,
            },
          },
          allowFileUploads: false,
          enableStreaming: false,
        });

        // Ensure newly injected messages dynamically configure their Bidi layout
        const applyMessageDirection = () => {
          const messages = target.querySelectorAll('.chat-message');
          messages.forEach((element) => {
            if (!element.hasAttribute('dir')) {
              element.setAttribute('dir', 'auto');
            }
          });
        };

        applyMessageDirection();

        observer = new MutationObserver(() => {
          applyMessageDirection();
        });

        observer.observe(target, {
          childList: true,
          subtree: true,
        });

        const toggle = target.querySelector<HTMLElement>('.chat-window-toggle');
        if (!toggle) throw new Error('Chat toggle did not mount');
        toggle.setAttribute('role', 'button');
        toggle.setAttribute('tabindex', '0');
        toggle.setAttribute('aria-label', copy.closeButtonTooltip);
        toggle.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggle.click();
          }
        });
        let expanded = false;
        toggle.addEventListener('click', () => {
          expanded = !expanded;
          toggle.setAttribute('aria-expanded', String(expanded));
          toggle.setAttribute('aria-label', expanded ? copy.closeButtonTooltip : openLabel);
        });
        toggle.click();
        toggle.focus();
        setReady(true);
      } catch (error) {
        if (cancelled) return;
        target.dataset.initialized = 'false';
        setFailed(true);
        setRequested(false);
        console.error('N8nChat: Failed to initialize the n8n chat widget.', error);
      }
    };

    void initializeChat();

    return () => {
      cancelled = true;
      observer?.disconnect();
      chatApp?.unmount();
      target.replaceChildren();
      delete target.dataset.initialized;
    };
  }, [locale, requested, openLabel]);

  return (
    <>
      {!ready && (
        <button
          type="button"
          data-chat-launcher
          aria-label={openLabel}
          aria-busy={requested}
          disabled={requested}
          onClick={() => { setFailed(false); setRequested(true); }}
          className="fixed z-[80] flex items-center justify-center rounded-full bg-primary text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ right: 'var(--chat--window--right)', bottom: 'var(--chat--window--bottom)', width: 'var(--chat--toggle--size)', height: 'var(--chat--toggle--size)' }}
        >
          {requested ? <span aria-hidden="true">…</span> : (
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8" /></svg>
          )}
          {failed && <span role="status" className="sr-only">{locale === 'ar' ? 'تعذر تحميل المحادثة. حاول مرة أخرى.' : 'Chat could not load. Try again.'}</span>}
        </button>
      )}
    <div
      id="n8n-chat"
      data-locale={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      aria-live="polite"
    />
    </>
  );
}
