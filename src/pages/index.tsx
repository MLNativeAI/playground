import { type NextPage } from 'next';
import { Landing } from '~/components/Landing';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5P5C10B0MZ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5P5C10B0MZ');
        `}
      </Script>
      <NextSeo title="MLnative | AI Playground" description="A curated collection of AI models, powered by MLnative" />
      <Landing />
    </>
  );
};

export default Home;
