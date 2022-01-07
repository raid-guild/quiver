declare global {
  interface Window {
    ethereum: {
      request: (method: string, params: any[]) => Promise<any>;
    };
  }
}
