import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ApiError } from '~/pages/models/resnet';
import { Base64 } from 'js-base64';
import { StdiffResult } from '~/components/StdiffResult';

export const StdiffPredictionSection = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  const predict = async (prompt: string) => {
    setLoading(true);
    setIsLoaded(false);
    setError('');
    const json = JSON.stringify({ input: prompt });
    await axios
      .post<ArrayBuffer>(`/api/stream/stdiff`, json, {
        responseType: 'arraybuffer', // Get response as ArrayBuffer
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.status == 200) {
          const arrayBuffer = response.data;
          const body = Base64.fromUint8Array(new Uint8Array(arrayBuffer));
          const dataUrl = `data:image/png;base64,${body}`;
          setImageUrl(dataUrl);
          setLoading(false);
          setIsLoaded(true);
        }
      })
      .catch((err: AxiosError<ApiError>) => {
        console.error(err);
        setLoading(false);
        setIsLoaded(false);
        setError(err.message);
      });
  };

  const stdiffExampleButton = (props: { text: string }) => (
    <button
      type="button"
      disabled={isLoading}
      onClick={() => predict(props.text)}
      className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-500 ring-offset-white transition-all hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-25 dark:focus:ring-offset-gray-800"
    >
      {props.text}
    </button>
  );

  return (
    <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2">
      <div className="space-y-8 pr-16">
        <h2 className="text-xl font-bold dark:text-white md:text-2xl md:leading-tight">Run the model</h2>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-25 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            placeholder="Enter a custom prompt"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              disabled={isLoading}
              type="button"
              onClick={() => predict(input)}
              className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-blue-600 text-white transition-all hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-25"
            >
              <svg
                className="h-3.5 w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </button>
          </div>
        </div>
        <span className="flex text-gray-500">...or try one of these:</span>
        <div className={'flex-row space-y-2'}>
          {stdiffExampleButton({ text: 'Pope Francis playing basketball in Rome' })}
          {stdiffExampleButton({ text: 'Jimmy Butler wearing Balenciaga outfit on the Paris fashion week.' })}
          {stdiffExampleButton({ text: 'Kanye West eats ice cream in the park with Lech Walesa.' })}
          {stdiffExampleButton({ text: 'Indiana Jones has found the lost Ark.' })}
          {stdiffExampleButton({ text: 'Poland wins the football world championship' })}
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-bold dark:text-white md:text-2xl md:leading-tight">Result</h2>
        <StdiffResult isLoaded={isLoaded} isLoading={isLoading} imageUrl={imageUrl} error={error} />
      </div>
    </div>
  );
};
