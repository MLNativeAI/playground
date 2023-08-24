import React from 'react';
import { useAuth, UserButton } from '@clerk/nextjs';
import { useClerk } from '@clerk/clerk-react';

export const HeaderMenu = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { openSignUp } = useClerk();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return (
      <a
        href="#"
        className="flex items-center gap-x-2 font-medium text-gray-400 hover:text-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 md:my-6 md:border-l md:border-gray-300 md:pl-6"
        onClick={() => openSignUp()}
      >
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        Sign in
      </a>
    );
  }

  return <UserButton afterMultiSessionSingleSignOutUrl="/" />;
};
