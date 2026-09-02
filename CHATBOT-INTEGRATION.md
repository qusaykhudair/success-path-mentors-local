# n8n Chatbot Integration

The official `@n8n/chat` widget is integrated globally for the English and Arabic routes.

## Configuration

The code reads the webhook only from:

```env
NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL=https://your-n8n-host/webhook/.../chat
```

Do not hard-code API keys or credentials in any `NEXT_PUBLIC_` variable.

## n8n Chat Trigger checklist

In the n8n workflow:

1. Use a **Chat Trigger** node and its **production** webhook URL.
2. Make sure the workflow is **Active / Published**.
3. Add these entries to **Allowed Origins (CORS)**:
   - `http://localhost:3000`
   - `https://successpathmentors.net`
   - `https://www.successpathmentors.net`
   - Any active preview/staging domain used for testing.
4. Keep the expected input keys as `chatInput` and `sessionId`, or update both the workflow and `src/components/chat/n8n-chat.tsx` together.
5. Streaming is disabled in the website code. Enable it in both the Chat Trigger and the component only when the workflow is configured for streaming responses.
6. Set **Load Previous Session** to **From Memory** and connect the Chat Trigger and AI Agent to Redis chat memory configured for the connected Chat Trigger session ID.

## Files added or changed

- `src/app/api/chat/route.ts` (Next.js same-origin API proxy to prevent CORS, Safari ITP, and network failures)
- `src/components/chat/n8n-chat.tsx`
- `src/app/[locale]/layout.tsx`
- `src/app/globals.css`
- `src/components/layout/back-to-top-button.tsx`

The back-to-top button is positioned above the chatbot button to prevent overlap. The WhatsApp button remains on the left side.
Chat requests route through `/api/chat` for same-origin security and resilience across mobile Safari and desktop browsers.

## Local verification

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Then test both:

- `http://localhost:3000/en`
- `http://localhost:3000/ar`

If the widget appears but sending a message fails, check the browser Network tab for CORS errors and verify the n8n workflow execution log.


## Persistent chat sessions

The embedded widget uses `loadPreviousSession: true`. The website owns a tab-scoped session ID under `spm-chat/sessionId` in browser `sessionStorage` and passes it explicitly to `createChat`. The ID survives a full page refresh in the same tab, while a newly opened tab receives an independent conversation. The n8n Chat Trigger then loads the matching Redis history. The Chat Trigger must use **Load Previous Session → From Memory**, and its memory connection must use the same Redis-backed session ID as the AI Agent.

To verify persistence and isolation, send a test name, refresh the same tab, and ask for the name again. Then open the site in a new tab: it must start an independent session and must not know the first tab's test data. A private/incognito window must also remain independent.
