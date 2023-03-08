import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Full } from '@/layouts';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle/'), {
  ssr: process.env.NODE_ENV === 'production',
});

const thisYear = new Date().getFullYear();

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="prefetch" href="/daily" />
      <link rel="prefetch" href="/about" />
    </Head>
    <Full>
      <h1>Alan Shortis</h1>
      <Link href="/about">About</Link>
      <SchemeToggle />
      <p className="label">&copy;{thisYear} Alan Shortis</p>
    </Full>
  </>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
