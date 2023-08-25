import React, { useState } from 'react';

interface CodeListingProps {
  code: string;
  clipboardCode: string;
}

export const CodeListing = ({ code, clipboardCode }: CodeListingProps) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(): void {
    setCopied(true);
    navigator.clipboard.writeText(clipboardCode);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  const renderIcon = () => {
    if (copied) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  };

  return (
    <div className="flex flex-row items-start break-all rounded-xl bg-gray-900 p-4 text-gray-200	">
      <code className="prose text-sm">$ {code}</code>
      <div className="flex flex-row space-x-4"></div>
      <a
        type="button"
        className="h-4.5 w-4.5 cursor-pointer items-center justify-center rounded-md bg-gray-700 px-2 py-2 text-xs font-medium opacity-70 shadow-sm transition-all hover:opacity-100"
        onClick={() => copyToClipboard()}
      >
        {renderIcon()}
      </a>
    </div>
  );
  return;
};
