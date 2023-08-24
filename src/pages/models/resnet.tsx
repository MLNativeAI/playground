import React from 'react';
import { Layout } from '~/components/Layout';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import Link from 'next/link';
import { ApiKeySection } from '~/components/ApiKeySection';
import { ResnetPredictionSection } from '~/components/ResnetPredictionSection';
import { getResnetUrl } from '~/lib/api-utils';
import { useRouter } from 'next/router';
import UseCases from '~/components/UseCases';

export interface ApiError {
  message: string;
}

const Resnet = () => {
  const router = useRouter();
  const { active } = router.query;

  const desc =
    'Image classification models are widely used in various industries for categorizing and labeling images. Here are popular business use cases for employing image classification models:';

  const useCases = [
    {
      title: 'E-Commerce Product Categorization',
      description:
        'Image classification can automatically categorize products in e-commerce catalogs, making it easier for customers to navigate and search for specific items.'
    },
    {
      title: 'Visual Search in e-Commerce',
      description:
        'Image classification enables visual search in e-commerce platforms, allowing customers to find products by uploading images and getting matched results.'
    },
    {
      title: 'Retail Analytics',
      description:
        'Retailers can use image classification to analyze in-store customer behavior, such as counting foot traffic or tracking which store areas are visited most frequently. It’s applicable in other industries such as airports, train stations, gas stations, or factories.'
    },
    {
      title: 'Quality Control and Defect Detection',
      description:
        'Manufacturers can use image classification to identify defects and anomalies in products during production, ensuring quality control and minimizing defects reaching customers.'
    },
    {
      title: 'Agriculture and Crop Monitoring',
      description:
        'Image classification can be used to monitor crops and identify issues such as pests, diseases, or nutrient deficiencies, aiding in precision agriculture.'
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col justify-start space-y-8">
        <Breadcrumbs lastNode="Resnet" />
        <div className="flex w-full space-x-8">
          <h2 className="text-2xl font-bold dark:text-white md:text-4xl">Resnet</h2>
          <div className="inline-flex items-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Active</span>
          </div>
        </div>
        <span className="text-gray-500">
          <Link href="/">ResNet</Link> is a powerful tool for understanding and working with images. You can use it to
          do things like figure out what's in a picture, find and highlight objects, separate different parts of an
          image, create new images with different styles, help doctors spot diseases in medical images, and even
          understand what's happening in videos. It's like a Swiss Army knife for working with pictures and videos in
          smart and creative ways!
        </span>
        <UseCases active={active !== undefined} desc={desc} useCases={useCases} />
        <ResnetPredictionSection />
        <ApiKeySection getUrl={getResnetUrl} />
      </div>
    </Layout>
  );
};

export default Resnet;
