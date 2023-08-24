import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ApiError } from '~/pages/models/resnet';
import { FlanResult } from '~/components/FlanResult';

export const FlanPredictionSection = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  const predict = async (prompt: string) => {
    setLoading(true);
    setIsLoaded(false);
    setError('');
    const json = JSON.stringify({ input: prompt });
    await axios
      .post<string>(`/api/predict/flan-t5-large`, json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.status == 200) {
          setResponse(response.data);
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

  const flanSample = (props: { text: string }) => (
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
          <div>{flanSample({ text: 'How many videos are there on youtube?' })}</div>
          <div>{flanSample({ text: "What's the story of the Hamlet?" })}</div>
          <div>{flanSample({ text: 'translate to German: no rest for the wicked' })}</div>
          <div>{flanSample({ text: 'Why is the sky blue?' })}</div>
          <div>{flanSample({ text: 'What’s the longest English word?' })}</div>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-bold dark:text-white md:text-2xl md:leading-tight">Result</h2>
        <FlanResult response={response} isLoaded={isLoaded} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};
