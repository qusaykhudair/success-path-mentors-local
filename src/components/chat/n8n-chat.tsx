'use client';

import { useEffect } from 'react';

type N8nChatLocale = 'en' | 'ar';

interface N8nChatProps {
  locale: N8nChatLocale;
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
} as const;

/**
 * Loads the official n8n chat widget only in the browser.
 * The webhook URL remains configurable through .env.local / hosting settings.
 */
export function N8nChat({ locale }: N8nChatProps) {
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
    let chatApp: { unmount: () => void } | null = null;

    const initializeChat = async () => {
      try {
        const { createChat } = await import('@n8n/chat');

        if (cancelled) {
          return;
        }

        const copy = chatCopy[locale];

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
        });
      } catch (error) {
        target.dataset.initialized = 'false';
        console.error('N8nChat: Failed to initialize the n8n chat widget.', error);
      }
    };

    void initializeChat();

    return () => {
      cancelled = true;
      chatApp?.unmount();
      target.replaceChildren();
      delete target.dataset.initialized;
    };
  }, [locale]);

  return (
    <div
      id="n8n-chat"
      data-locale={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      aria-live="polite"
    />
  );
}
