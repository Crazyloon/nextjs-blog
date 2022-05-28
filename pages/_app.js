import '../styles/global.css';
import React from 'react';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const route = useRouter();

  return (
    <Layout home={route.pathname === '/'}>
      <Component {...pageProps} />
    </Layout>
  );
}