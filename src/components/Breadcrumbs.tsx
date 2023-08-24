import React from 'react';

interface BreadcrumbProps {
  lastNode: string;
}

export const Breadcrumbs = ({ lastNode }: BreadcrumbProps) => {
  return (
    <ol className="flex min-w-0 items-center whitespace-nowrap" aria-label="Breadcrumb">
      <li className="text-sm">
        <a className="flex items-center text-gray-500 hover:text-blue-600" href="/models">
          Models
          <svg
            className="mx-3 h-2.5 w-2.5 flex-shrink-0 overflow-visible text-gray-400 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </li>
      <li className="text-sm">
        <a className="flex items-center text-gray-500 hover:text-blue-600" href="#">
          {lastNode}
        </a>
      </li>
    </ol>
  );
};
