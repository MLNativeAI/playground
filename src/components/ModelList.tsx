import React from 'react';
import Link from 'next/link';

const ModelCard = (props: { imageSrc: string; title: string; category: string; desc: string; link: string }) => {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      <div className="flex h-52 flex-col items-center justify-center rounded-t-xl">
        <div className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl sm:w-56">
          <img
            className="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={props.imageSrc}
            alt="Image Description"
          />
        </div>
      </div>
      <div className="p-4 md:p-6">
        <span className="mb-1 block text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          {props.category}
        </span>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">{props.title}</h3>
        <p className="mt-3 text-gray-500">{props.desc}</p>
      </div>
      <div className="mt-auto flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
          href={props.link}
        >
          Run model
        </a>
        <a
          className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white px-4 py-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
          href={props.link + '?active=true#use-case-accordion'}
        >
          See use cases
        </a>
      </div>
    </div>
  );
};

export const ModelList = () => (
  <div>
    <div className="flex flex-col space-y-4 py-8">
      <div className="text-2xl font-semibold text-gray-800">Model directory</div>
      <span className="text-gray-500">
        We've prepared the following models to demonstrate the power and use cases for various AI application in
        real-world applications. These models are complete free, available for you to try out and use in your own
        projects.{' '}
        <Link className="underline" href="/about">
          {' '}
          Read more
        </Link>
      </span>
    </div>
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ModelCard
          imageSrc={'/voice_model.png'}
          title={'Text to Speech'}
          category={'Voice generation'}
          desc={'Generate highly realistic, multilingual speech with the Bark model'}
          link={'/models/tortoise'}
        />
        <ModelCard
          imageSrc={'/llm.png'}
          title={'Chat AI'}
          category={'Large Language model'}
          desc={
            'Flan-T5 is a large language model that can be used for text summarization, translation, and question answering.'
          }
          link={'/models/flan'}
        />
        <ModelCard
          imageSrc={'/image.jpeg'}
          title={'Classification'}
          category={'Computer Vision'}
          desc={
            'Check out Resnet, a deep neural network that is widely used for image classification tasks. It is the backbone of many computer vision applications.'
          }
          link={'/models/resnet'}
        />
        <ModelCard
          imageSrc={'/stdiff.png'}
          title={'Image generation'}
          category={'Generative AI'}
          desc={
            'Try out Stable diffusion, a new approach to training generative models, produces high-quality images and videos with fewer artifacts than other diffusion techniques.'
          }
          link={'/models/stdiff'}
        />
      </div>
    </div>
  </div>
);
