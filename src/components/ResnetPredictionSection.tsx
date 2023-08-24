import { FileInput } from '~/components/FileUpload';
import { ResnetResult } from '~/components/ResnetResult';
import React, { useEffect, useState } from 'react';
import { Base64 } from 'js-base64';
import axios, { AxiosError } from 'axios';
import { ApiError } from '~/pages/models/resnet';
import Link from 'next/link';

export const ResnetPredictionSection = () => {
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);

  const predictFromFile = async () => {
    setIsLoaded(false);
    setError('');
    setLoading(true);
    if (file as File) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const bytes = await file.arrayBuffer();

      const body = Base64.fromUint8Array(new Uint8Array(bytes));
      const dataUrl = `data:image/png;base64,${body}`;
      setImageUrl(dataUrl);

      const json = JSON.stringify({ input: body });
      axios
        .post<string>(`/api/predict/resnet-50`, json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          if (response.status == 200) {
            setCategory(response.data);
            setLoading(false);
            setIsLoaded(true);
          } else {
            setLoading(false);
            setError('Prediction failed: ' + response.status);
          }
        })
        .catch((err: AxiosError<ApiError>) => {
          setLoading(false);
          setError('Prediction failed: ' + err.response?.data?.message);
          console.error(err, err.response?.data?.message);
        });
    }
  };

  const getRandomImage = async () => {
    setIsLoaded(false);
    setError('');
    setLoading(true);
    const response = await axios.get('https://source.unsplash.com/random/300×300');

    if (response.request.responseURL) {
      setImageUrl(response.request.responseURL);
    }
  };

  useEffect(() => {
    if (imageUrl !== '') {
      predictFromExternalURL(imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (file) {
      predictFromFile();
    }
  }, [file]);

  const predictFromExternalURL = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        setLoading(false);
        setError('Failed to fetch image from Upstash');
      }

      const blob = await response.blob();
      const reader = new FileReader();
      reader.onload = async () => {
        const arrayBuffer: ArrayBuffer = reader.result as ArrayBuffer;
        if (arrayBuffer) {
          const body = Base64.fromUint8Array(new Uint8Array(arrayBuffer));
          const json = JSON.stringify({ input: body });

          try {
            const predictionResponse = await axios.post<string>('/api/predict/resnet-50', json, {
              headers: {
                'Content-Type': 'application/json'
              }
            });

            if (predictionResponse.status === 200) {
              setCategory(predictionResponse.data);
              setLoading(false);
              setIsLoaded(true);
            }
          } catch (err) {
            setLoading(false);
            setError('Prediction failed: ' + err.message);
            console.error('Prediction request error:', err);
          }
        }
      };
      reader.readAsArrayBuffer(blob);
    } catch (error) {
      setLoading(false);
      console.error('Image fetch error:', error);
    }
  };
  return (
    <div className="grid grid-cols-2 pt-16">
      <div>
        <h2 className="text-xl font-bold dark:text-white md:text-2xl md:leading-tight">Run the model</h2>
        <div className="flex-row space-y-4 py-8">
          <button
            type="button"
            disabled={isLoading}
            className="inline-flex w-96 items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-25 dark:focus:ring-offset-gray-800"
            onClick={() => getRandomImage()}
          >
            Predict with random image from Unsplash
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </button>
          <FileInput disabled={isLoading} setFile={setFile} setError={setError} />
          <span className="flex text-sm text-gray-500">
            Max file size: 4MB. Supported extensions: '.jpg', '.jpeg', '.png'
          </span>
        </div>
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-bold dark:text-white md:text-2xl md:leading-tight">Result</h2>
        <ResnetResult
          isLoaded={isLoaded}
          isLoading={isLoading}
          imageUrl={imageUrl}
          categories={category}
          error={error}
        />
      </div>
    </div>
  );
};
