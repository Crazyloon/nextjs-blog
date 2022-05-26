import Head from 'next/head';
import NavBar from './nav-bar';

export const siteTitle = 'Loony Blog';

export default function Layout({ children, home }) {
  
  return (
    <main className='h-screen'>
      <NavBar />
      <Head>          
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className='max-w-3xl px-4 mx-auto mb-8'>
        <main>{children}</main>
      </div>
    </main>
  );
}