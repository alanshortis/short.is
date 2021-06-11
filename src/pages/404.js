import Link from 'next/link';
import { Layout } from '../components';
import { PostArticle, PostMeta, PostBody } from '../components/PostLayout';

export const config = {
  unstable_runtimeJS: false,
};

const FourOhFour = ({ meta }) => (
  <Layout meta={meta} title="404" hasFooter>
    <PostArticle>
      <PostMeta>
        <h1>404</h1>
        <p className="intro">Whatever you're looking for isn't here.</p>
      </PostMeta>
      <PostBody>
        <p>
          The domain short.is used to belong to a short domain service, a bit like bit.ly. On the rare
          occasion I look at analytics I always see a lot of requests for random hashes that probably
          forwarded on to something interesting once upon a time.
        </p>
        <p>If you were expecting something else, I can only apologise.</p>
        <p>
          Go{' '}
          <Link href="/">
            <a>home</a>
          </Link>{' '}
          to see if you can find something you like.
        </p>
      </PostBody>
    </PostArticle>
  </Layout>
);

export default FourOhFour;
