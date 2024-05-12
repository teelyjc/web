
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from "next/font/google";

const sans = Inter({
  subsets: ["latin"]
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
