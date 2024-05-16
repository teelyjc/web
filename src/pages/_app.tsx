import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

import { Toaster } from '@/components/common/toast/toaster';
import { SocketProvider } from '@/contexts/socket-context';

const sans = Inter({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());

  useEffect(() => {
    console.info(
      '%cStop !',
      'color: #FA3B3B; font-size: 50px; font-weight: bold;',
    );
    console.info(
      `%cThis is a browser feature intended for developers,\nIf someone told you to copy-paste something here to enable a feature or "hack" someone\'s account,\nit is a scam and will give them access to your account.`,
      'font-size: 20px; font-weight: semi-bold',
    );
  }, []);

  return (
    <QueryClientProvider client={client}>
      <SocketProvider>
        <main className={sans.className}>
          <Toaster />
          <Component {...pageProps} />
        </main>
      </SocketProvider>
    </QueryClientProvider>
  );
}
