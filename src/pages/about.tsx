import { Layout } from '~/components/Layout';

export const About = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">What's this?</h2>
        <p className="text-gray-500">
          There's a lot of hype around AI right now. We've prepared this site so you can cut right through it and
          understand the practical applications of AI. The models you find here are free to use, and you can even run
          them in your browser.{' '}
        </p>
        <p className="text-gray-500">
          All the models you can find here share<b> a single Nvidia T4 GPU with 16Gb of VRAM</b>, and scale up and down
          automatically based on demand. If you’d like to know more about the tech behind making this possible, check
          out our core product,{' '}
          <a className="font-semibold underline" href="https://mlnative.com">
            the MLnative platform
          </a>
          .
        </p>
        <h3 className="text-xl font-semibold text-gray-800">REST API</h3>
        <p className="text-gray-500">
          We also provide API endpoints for each of the models. We currently do not enforce usage quotas, although this
          might change based on the incoming traffic in the future. You can find the API documentation{' '}
          <a className="font-semibold underline" href="https://api.playground.mlnative.com/openapi">
            here
          </a>
          .
        </p>
        <p className="text-gray-500">
          Feel free to use them in your apps, however, we provide them on a best-effort basis - neither uptime nor
          response time is guaranteed. We run the models off spot instances, so service disruption might occur
          infrequently. With that said, all requests typically complete within 10 seconds. If you’d like to use these at
          scale with a guaranteed SLA, please{' '}
          <a className="font-semibold underline" href="https://mlnative.com/contact-us">
            contact us
          </a>
          .
        </p>
        <h3 className="text-xl font-semibold text-gray-800">Source code</h3>
        <p className="text-gray-500">
          If you're curious to see how to integrate ML models into your own apps, check out our{' '}
          <a className="font-semibold underline" href="https://github.com/MLNativeAI/playground">
            Github
          </a>{' '}
          - we've made all of the code behind this site open source. You can also find{' '}
          <a className="font-semibold underline" href="https://github.com/MLNativeAI/model_examples/">
            the source code
          </a>{' '}
          we've used to build the models themselves.
        </p>
      </div>
    </Layout>
  );
};

export default About;
