'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type N8nChatLocale = 'en' | 'ar';

interface N8nChatProps {
  locale: N8nChatLocale;
}

const tabSessionStorageKey = 'spm-chat/sessionId';

interface N8nChatController {
  sendMessage: (text: string) => Promise<unknown>;
}

interface N8nChatApp {
  config: {
    globalProperties: {
      $chat?: N8nChatController;
    };
  };
  unmount: () => void;
}

function getPersistentSessionId(): string {
  try {
    const existingSessionId =
      window.sessionStorage.getItem(tabSessionStorageKey);
    const sessionId = existingSessionId ?? window.crypto.randomUUID();

    /*
     * sessionStorage survives a refresh but is isolated per browser tab.
     * Passing the value explicitly prevents @n8n/chat from replacing the
     * active tab's session with its origin-wide localStorage value.
     */
    window.sessionStorage.setItem(tabSessionStorageKey, sessionId);
    // Remove the application-owned localStorage key from the previous build.
    window.localStorage.removeItem(tabSessionStorageKey);

    return sessionId;
  } catch {
    // Storage can be unavailable in locked-down browsers. The chat still works,
    // but persistence is limited to the current page in that exceptional case.
    return window.crypto.randomUUID();
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
    categoriesLabel: 'Choose a topic',
    categories: [
      ['Pricing and plans', 'What pricing and plans are available?'],
      ['Subjects and grades', 'What subjects and grade levels are available?'],
      ['Free trial lesson', 'How can I book a free trial lesson?'],
      ['Registration', 'How can I register and start studying?'],
      ['Tutors', 'Tell me about the tutors and how the right tutor is selected.'],
      ['Schedules', 'How can I check the available lesson times?'],
      ['Payment and policies', 'What are the payment methods and the booking and cancellation policies?'],
      ['Contact the team', 'I would like to contact the Success Path Mentors team.'],
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
    categoriesLabel: 'اختر الموضوع',
    categories: [
      ['الأسعار والباقات', 'ما الأسعار والباقات المتاحة؟'],
      ['المواد والمراحل', 'ما المواد والمراحل الدراسية المتاحة؟'],
      ['الحصة التجريبية', 'كيف أحجز حصة تجريبية مجانية؟'],
      ['التسجيل', 'كيف يمكنني التسجيل وبدء الدراسة؟'],
      ['المعلمون', 'أخبرني عن المعلمين وطريقة اختيار المعلم المناسب.'],
      ['المواعيد', 'كيف يمكنني معرفة مواعيد الحصص المتاحة؟'],
      ['الدفع والسياسات', 'ما طرق الدفع وسياسات الحجز والإلغاء؟'],
      ['التواصل مع الفريق', 'أريد التواصل مع فريق Success Path Mentors.'],
    ],
  },
} as const;

/**
 * Loads the official n8n chat widget only in the browser.
 * The webhook URL remains configurable through .env.local / hosting settings.
 */
export function N8nChat({ locale }: N8nChatProps) {
  const chatControllerRef = useRef<N8nChatController | null>(null);
  const [categoriesHost, setCategoriesHost] = useState<HTMLElement | null>(null);
  const [isSendingCategory, setIsSendingCategory] = useState(false);

  useEffect(() => {
    const target = document.getElementById('n8n-chat');
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL?.trim();

    if (!target) {
      return;
    }

    if (!webhookUrl) {
      console.error(
        'N8nChat: NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL is not configured.'
      );
      return;
    }

    try {
      const parsedWebhookUrl = new URL(webhookUrl);

      if (
        parsedWebhookUrl.protocol !== 'https:' &&
        parsedWebhookUrl.protocol !== 'http:'
      ) {
        throw new Error('Unsupported webhook protocol.');
      }
    } catch (error) {
      console.error(
        'N8nChat: NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL is not a valid URL.',
        error
      );
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

    let cancelled = false;
    let chatApp: N8nChatApp | null = null;
    let footerObserver: MutationObserver | null = null;
    let categoriesElement: HTMLDivElement | null = null;

    const attachCategories = () => {
      const footer = target.querySelector<HTMLElement>('.chat-footer');

      if (!footer || categoriesElement) {
        return;
      }

      categoriesElement = document.createElement('div');
      categoriesElement.className = 'spm-chat-categories-host';
      footer.prepend(categoriesElement);
      setCategoriesHost(categoriesElement);
    };

    const initializeChat = async () => {
      try {
        const { createChat } = await import('@n8n/chat');

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
           * Reuse the session ID stored by @n8n/chat and ask the Chat Trigger
           * to restore the matching Redis history. This keeps a visitor's
           * conversation available after a refresh while preserving the
           * widget's per-browser session isolation.
           */
          loadPreviousSession: true,
          metadata: {
            source: 'success-path-mentors-website',
            locale,
            page: window.location.pathname,
          },
          showWelcomeScreen: false,
          /*
           * The n8n widget currently uses the `en` translation slot for custom
           * copy. We fill that slot with the active website language.
           */
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
        }) as N8nChatApp;

        chatControllerRef.current =
          chatApp.config.globalProperties.$chat ?? null;

        attachCategories();
        footerObserver = new MutationObserver(attachCategories);
        footerObserver.observe(target, {
          childList: true,
          subtree: true,
        });
      } catch (error) {
        target.dataset.initialized = 'false';
        console.error('N8nChat: Failed to initialize the n8n chat widget.', error);
      }
    };

    void initializeChat();

    return () => {
      cancelled = true;
      footerObserver?.disconnect();
      chatControllerRef.current = null;
      setCategoriesHost(null);
      chatApp?.unmount();
      target.replaceChildren();
      delete target.dataset.initialized;
    };
  }, [locale]);

  const sendCategoryQuestion = async (question: string) => {
    const chatController = chatControllerRef.current;

    if (!chatController || isSendingCategory) {
      return;
    }

    setIsSendingCategory(true);

    try {
      await chatController.sendMessage(question);
    } catch (error) {
      console.error('N8nChat: Failed to send a category question.', error);
    } finally {
      setIsSendingCategory(false);
    }
  };

  const copy = chatCopy[locale];

  return (
    <>
      <div
        id="n8n-chat"
        data-locale={locale}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        aria-live="polite"
      />

      {categoriesHost
        ? createPortal(
            <nav
              className="spm-chat-categories"
              aria-label={copy.categoriesLabel}
            >
              <p className="spm-chat-categories__title">
                {copy.categoriesLabel}
              </p>
              <div className="spm-chat-categories__grid">
                {copy.categories.map(([label, question]) => (
                  <button
                    key={label}
                    type="button"
                    className="spm-chat-category"
                    disabled={isSendingCategory}
                    onClick={() => void sendCategoryQuestion(question)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </nav>,
            categoriesHost
          )
        : null}
    </>
  );
}
