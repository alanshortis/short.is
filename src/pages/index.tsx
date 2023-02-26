import type { NextPage } from 'next';
import { PageLayout } from '@/layouts';

const Home: NextPage = () => (
  // <PageLayout>
  //   <h1 className="hidden">Home</h1>
  <>
    <p>abcdefghijklmnoöpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 æ Æ</p>
    <p>—!@£$#€%^&*()\\//?~`-_=+ &lsquo; &rsquo; &ldquo; &rdquo;|;:{'<>'}&copy; ← → &apos; ƒ × °</p>
  </>
  // </PageLayout>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
