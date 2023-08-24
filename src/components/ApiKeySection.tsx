import { CodeListing } from '~/components/CodeListing';
import React, { useEffect, useState } from 'react';
import { useUserApiKey } from '~/lib/hooks';
import Link from 'next/link';

interface ApiKeySectionProps {
  getUrl: (apiUrl: string, apiKey?: string) => string;
}

export const ApiKeySection = ({ getUrl }: ApiKeySectionProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_MLNATIVE_API_URL;
  const { isApiKeyLoaded, apiKey } = useUserApiKey();
  const [clipboardCode, setClipboardCode] = useState('');

  useEffect(() => {
    if (isApiKeyLoaded) {
      setClipboardCode(getUrl(apiUrl, apiKey));
    }
  }, [isApiKeyLoaded]);

  return (
    <>
      <h2 className="pt-16 text-xl font-bold dark:text-white md:text-2xl md:leading-tight">Rest API</h2>
      {!isApiKeyLoaded && (
        <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600" role="alert">
          Sign in to get access to the REST API.
        </div>
      )}
      <div className={`${isApiKeyLoaded ? ' ' : ' opacity-20'}`}>
        <CodeListing code={getUrl(apiUrl)} clipboardCode={clipboardCode} />
      </div>
      <span className="text-sm text-gray-500">
        Disclaimer: This API is not indended for production or commercial use.{' '}
        <Link className="underline" href="/about">
          More info
        </Link>
      </span>
    </>
  );
};
