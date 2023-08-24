import { type AppType } from 'next/app';

import '~/styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { NextSeo } from 'next-seo';

('use client;');

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <ClerkProvider {...pageProps}>
      <NextSeo title="MLnative | AI Playground" description="A curated collection of AI models, powered by MLnative" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
