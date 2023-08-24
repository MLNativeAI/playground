import { Layout } from '~/components/Layout';
import { Banner } from '~/components/Banner';
import React from 'react';

export const Landing = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url('/background.webp')`
      }}
    >
      <Layout>
        <Banner />
      </Layout>
    </div>
  );
};
