declare module '@n8n/chat' {
  interface ChatInstance {
    unmount(): void;
  }

  export function createChat(options: Record<string, unknown>): ChatInstance;
}
