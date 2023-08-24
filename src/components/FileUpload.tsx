import React, { ChangeEvent, useRef } from 'react';

interface CustomFileInputProps {
  setFile: (file: File) => void;
  setError(message: string): void;
  disabled: boolean;
}

export const FileInput = ({ setFile, disabled, setError }: CustomFileInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const selectedFile = e.target.files[0];

    // Validate file size
    const maxSize = 4 * 1024 * 1024; // 4 MB in bytes
    if (selectedFile.size > maxSize) {
      setError('Unsupported file extension.');
      console.error('File size exceeds 4 MB limit.');
      return;
    }

    // Validate file extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png']; // Add more extensions as needed
    const fileExtension = selectedFile.name.slice(selectedFile.name.lastIndexOf('.')).toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setError('Unsupported file extension.');
      console.error('Unsupported file extension.');
      return;
    }

    setFile(e.target.files[0]);
  };

  return (
    <>
      <button
        disabled={disabled}
        className=" inline-flex w-96 items-center justify-center gap-2 rounded-md border-2 border-gray-200 py-[.688rem] text-sm font-semibold text-blue-500 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-700 dark:hover:border-blue-500"
        onClick={handleUploadClick}
      >
        Upload custom image
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
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </button>
      <input type="file" ref={inputRef} onChange={handleFileChange} style={{ display: 'none' }} />
    </>
  );
};
