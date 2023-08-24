import React from 'react';

interface ResnetResultProps {
  isLoading: boolean;
  isLoaded: boolean;
  imageUrl: string;
  error: string;
  categories: string;
}

export const ResnetResult = ({ imageUrl, categories, isLoaded, isLoading, error }: ResnetResultProps) => {
  if (error !== '') {
    return (
      <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gray-100 text-gray-500">
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <svg
              className="mt-0.5 h-4 w-4 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-700 dark:text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoaded) {
    return (
      <div className="flex flex-row space-x-4">
        <div className="space-y-4">
          <p className="text-gray-600">Image</p>
          <img className="h-64 w-64 object-cover" alt="qq" src={imageUrl} />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">Classification result: </p>
          <p className="text-lg font-bold">{categories}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gray-100 text-gray-500 opacity-60">
        <div className="flex flex-row space-x-4">
          <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
            role="status"
            aria-label="loading"
          ></div>
          <span className="sr-only">Loading...</span>
          <p>Loading... </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gray-100 text-gray-500 opacity-60">
      <div>Click predict to get started</div>
    </div>
  );
};
