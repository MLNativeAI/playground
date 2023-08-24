import React from 'react';

interface UseCaseProps {
  active: boolean;
  desc: string;
  useCases: { title: string; description: string }[];
}

function UseCaseRow(props: { useCase: { title: string; description: string } }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
      <div className="col-span-1 flex space-x-4">
        <svg
          className="h-6 w-6 flex-shrink-0 text-blue-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
            fill="currentColor"
          />
        </svg>
        <span className="font-bold text-gray-800">{props.useCase.title}</span>
      </div>
      <p className="col-span-2 text-gray-500">{props.useCase.description}</p>
    </div>
  );
}

const UseCases = ({ active, desc, useCases }: UseCaseProps) => {
  return (
    <div className="hs-accordion-group">
      <div className={`hs-accordion ${active ? 'active' : ''}`} id="use-case-accordion">
        <button
          className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        >
          What are the common business use cases for this model?
          <svg
            className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="x"
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-one"
          className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
            active ? '' : ' hidden'
          }`}
          aria-labelledby="use-case-accordion"
        >
          <p className="py-8 text-gray-500">{desc}</p>

          <div className="flex flex-col space-y-8 text-gray-500 sm:space-y-6">
            {useCases.map((useCase) => (
              <UseCaseRow key={useCase.title} useCase={useCase} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
