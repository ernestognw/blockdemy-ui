/* eslint-disable react/prop-types */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { BlockdemyUIProvider } from '@config/theme';
import DocsLayout from '@layouts/docs';
import MainLayout from '@layouts/main';
import MDXComponents from '@components/mdx';
import seo from '@config/seo';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  let Layout;

  if (router.pathname === '/') {
    Layout = MainLayout;
  } else {
    Layout = DocsLayout;
  }

  return (
    <BlockdemyUIProvider>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </BlockdemyUIProvider>
  );
};

export default App;
