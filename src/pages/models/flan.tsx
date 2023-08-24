import { Layout } from '~/components/Layout';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import Link from 'next/link';
import { ApiKeySection } from '~/components/ApiKeySection';
import React from 'react';
import { getFlanUrl } from '~/lib/api-utils';
import { FlanPredictionSection } from '~/components/FlanPredictionSection';
import { useRouter } from 'next/router';
import UseCases from '~/components/UseCases';

const Flan = () => {
  const router = useRouter();
  const { active } = router.query;

  const desc =
    'Large language models (LLMs), like Flan T5 deployed in our Playground, can be utilized in various ways. Here are the most popular use cases across different industries:';

  const useCases = [
    {
      title: 'Content Generation',
      description:
        'LLMs can create high-quality written content for blogs, social media posts, product descriptions, etc. LLMs take content creation to the next level in speed and volume while maintaining consistent quality.'
    },
    {
      title: 'Customer Support Chatbots',
      description:
        'leveraging LLMs in chatbots enables instant and personalized customer support, addressing common queries and concerns 24/7.'
    },
    {
      title: 'Content Summarization',
      description:
        'LLMs automatically generate summaries of lengthy documents, articles, or reports, making information more accessible and digestible.'
    },
    {
      title: 'Personalized Recommendations',
      description:
        'LLMs can provide personalized product recommendations by analyzing customer preferences and behavior, enhancing the customer shopping experience.'
    },
    {
      title: 'HR and Recruitment',
      description:
        "LLMs can automate the initial stages of the recruitment process by screening resumes, conducting initial interviews, and assessing candidates' suitability for positions."
    },
    {
      title: 'Data Analysis and Reporting',
      description:
        'LLMs can extract insights from complex data sets and generate detailed reports, aiding decision-makers in understanding trends and making informed choices.'
    },
    {
      title: 'Market Research and Sentiment Analysis',
      description:
        "language models can analyze social media posts, reviews, and comments to measure customers' sentiments about products, services, or brands. It automates and accelerates the work the marketing and Business Intelligence teams usually do. LLM models can be invaluable when it comes to a significant potential social media crisis that can be identified and addressed before it turns into a viral social media storm."
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-start space-y-8">
        <Breadcrumbs lastNode="Flan-T5" />
        <div className="flex w-full space-x-8">
          <h2 className="text-2xl font-bold dark:text-white md:text-4xl">Flan-T5</h2>
          <div className="inline-flex items-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Active</span>
          </div>
        </div>
        <span className="text-gray-500">
          <Link href="/">Flan-T5</Link> is a large language model that is based on T5. It has been fine-tuned on a
          mixture of tasks, which makes it better at zero-shot and few-shot learning. This means that it can perform
          many different tasks without being explicitly trained on them. Some of the tasks that Flan-T5 can do include
          <span className="bold">text summarization, question answering, and translation</span>.
        </span>
        <UseCases active={active !== undefined} desc={desc} useCases={useCases} />
        <FlanPredictionSection />
        <ApiKeySection getUrl={getFlanUrl} />
      </div>
    </Layout>
  );
};

export default Flan;
