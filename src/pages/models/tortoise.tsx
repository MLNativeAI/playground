import React from 'react';
import { Layout } from '~/components/Layout';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import Link from 'next/link';
import { ApiKeySection } from '~/components/ApiKeySection';
import { getTortoiseUrl } from '~/lib/api-utils';
import { TortoisePredictionSection } from '~/components/TortoisePredictionSection';
import UseCases from '~/components/UseCases';
import { useRouter } from 'next/router';

const desc =
  'Text-to-speech (TTS) and Speech-to-text (STT) machine learning models have a wide range of applications in the business world. Here are the most popular use cases:';

const useCases = [
  {
    title: 'Voice Assistants and Chatbots',
    description:
      'Incorporating TTS into voice assistants and chatbots allows businesses to provide more natural and engaging interactions with customers. TTS improves customer service by allowing for serving any number of customers in any language while always staying professional. It definitely upgrades the overall user experience.'
  },
  {
    title: 'Automated Call Centers',
    description:
      'TTS can be integrated into automated call center systems, providing callers with information and assistance. Today, technology allows for creating voice assistants that sound like real human beings who can handle complex queries and present professional and respectful attitudes toward callers.'
  },
  {
    title: 'A New Dimension for Text-Based Forms',
    description:
      'TTS can create audio versions of any content, from online articles through internal materials to product descriptions. TTS extends currently available forms of serving text-based content by making it available and more engaging for people who prefer audio.'
  },
  {
    title: 'Audio Content Creation',
    description:
      'use TTS to generate audio content for podcasts, audiobooks, and other forms of media in the native languages of your audience. This speeds up content creation and caters to audiences who prefer audio consumption.'
  },
  {
    title: 'Globally Distributed Content In Local Languages',
    description:
      'TTS models can convert written content into spoken language, aiding in language localization for global audiences. This is useful for creating content in multiple languages without hiring voice actors. This is particularly useful for explainer videos and product demos.'
  },
  {
    title: 'Meeting Summaries and Notes',
    description:
      'STT can provide real-time transcriptions of meetings, helping participants focus on discussions without taking extensive notes and creating actionable summaries for later reference.'
  },
  {
    title: 'Captioning and Subtitling',
    description:
      'use STT to automatically generate captions and subtitles for videos, making them accessible to a broader audience, especially to individuals who are deaf or hard of hearing individuals.'
  },
  {
    title: 'Market Research and Insights',
    description:
      'analyze recorded consumer focus groups, interviews, and surveys using STT to extract valuable information. Mine large volumes of voice data (such as recorded customer interactions) for insights, trends, and patterns, which can help make informed decisions and improve business operations and processes.'
  }
];

const Tortoise = () => {
  const router = useRouter();
  const { active } = router.query;

  return (
    <Layout>
      <div className="flex flex-col justify-start space-y-8">
        <Breadcrumbs lastNode="Tortoise" />
        <div className="flex w-full space-x-8">
          <h2 className="text-2xl font-bold dark:text-white md:text-4xl">Tortoise</h2>
          <div className="inline-flex items-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Active</span>
          </div>
        </div>
        <span className="text-gray-500">
          <Link href="/">Tortoise</Link> is an AI model that can generate audio from text.
        </span>
        <UseCases active={active !== undefined} desc={desc} useCases={useCases} />
        <TortoisePredictionSection />
        <ApiKeySection getUrl={getTortoiseUrl} />
      </div>
    </Layout>
  );
};

export default Tortoise;
