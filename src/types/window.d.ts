declare global {
  interface Window {
    __fetchIntercepted?: boolean;
  }
}

export {};
