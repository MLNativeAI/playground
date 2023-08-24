import { Layout } from '~/components/Layout';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import Link from 'next/link';
import { ApiKeySection } from '~/components/ApiKeySection';
import React from 'react';
import { StdiffPredictionSection } from '~/components/StdiffPredictionSection';
import { getStdiffUrl } from '~/lib/api-utils';
import UseCases from '~/components/UseCases';
import { useRouter } from 'next/router';

const Stdiff = () => {
  const router = useRouter();
  const { active } = router.query;

  const useCases = [
    {
      title: 'Product Design and Prototyping',
      description:
        'Image generation models can assist designers by generating visual representations of product concepts, helping\n' +
        '      them explore design options before creating physical prototypes.'
    },
    {
      title: 'Real Estate Visualization',
      description:
        'These models can ' +
        'generate realistic images of properties that do not yet exist, helping real estate developers ' +
        'showcase potential projects to clients and investors.'
    },
    {
      title: 'Interior Design',
      description:
        'Interior designers can use image generation to create virtual representations of room layouts and design concepts, aiding clients in visualizing the final result.'
    },
    {
      title: 'Fashion and Retail',
      description:
        'Image generation can help retailers create virtual try-on experiences, allowing customers to visualize how clothing and accessories would look on them before making a purchase.'
    },
    {
      title: 'Artificial Intelligence-Enhanced Creativity',
      description:
        'Artists and creative professionals can collaborate with image-generation models to spark new artistic directions, generate unique visuals, and explore creative possibilities'
    },
    {
      title: 'Marketing Campaign Production',
      description:
        'Image generation can create realistic backgrounds and environments for online and physical products (or services). It can significantly reduce the budget for hiring photographers and renting physical sets. Also, producing concepts and ready-to-go campaigns happens much faster while expanding creative possibilities.'
    }
  ];
  return (
    <Layout>
      <div className="flex flex-col justify-start space-y-8">
        <Breadcrumbs lastNode="Stable Diffusion" />
        <div className="flex w-full space-x-8">
          <h2 className="text-2xl font-bold dark:text-white md:text-4xl">Stable Diffusion</h2>
          <div className="inline-flex items-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Active</span>
          </div>
        </div>
        <span className="text-gray-500">
          <Link href="/">Stable Diffusion</Link> is a latent text-to-image diffusion model capable of generating
          photo-realistic images given any text input, cultivates autonomous freedom to produce incredible imagery,
          empowers billions of people to create stunning art within seconds.
        </span>
        <UseCases
          desc={
            'Image generation models are becoming increasingly powerful and versatile. Here are popular business use cases for utilizing image generation models:'
          }
          active={active !== undefined}
          useCases={useCases}
        />
        <StdiffPredictionSection />
        <ApiKeySection getUrl={getStdiffUrl} />
      </div>
    </Layout>
  );
};

export default Stdiff;
