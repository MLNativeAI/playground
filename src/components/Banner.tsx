import Link from 'next/link';

export const Banner = () => {
  return (
    <div className="min-w-100 flex min-h-full flex-grow flex-col items-center justify-center py-8 lg:py-40">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent dark:from-blue-400 dark:to-violet-400">
            Explore what you can achieve with AI and MLnative
          </p>

          <div className="mt-5 max-w-2xl">
            <h1 className="block text-4xl font-semibold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
              AI Model Playground
            </h1>
          </div>

          <div className="mt-5 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A curated collection of AI Models, free for everyone to use. Powered by{' '}
              <Link className="text-purple-500 underline" href="https://mlnative.com/">
                MLnative
              </Link>
            </p>
          </div>

          <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
            <a
              className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              href="/models"
            >
              Run models
              <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:text-white dark:hover:border-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
              href="/about"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
