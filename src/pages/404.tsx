import type { NextPage } from 'next';
import c from 'classnames';
import { PageLayout } from '@/layouts';
import layoutStyles from '@/layouts/PageLayout/PageLayout.module.scss';
import contentStyles from '@/components/Markdown/Markdown.module.scss';

const NotFound: NextPage = () => (
  <PageLayout title="404">
    <h2 className={layoutStyles.title}>404</h2>
    <article className={c(layoutStyles.content, contentStyles.markdown)}>
      <p className={contentStyles.large}>Whatever you&rsquo;re looking for is not here.</p>
      <p>
        short.is used to be a domain shortening service, so there is a chance you followed a link with the
        hope of seeing something cool. This probably isn&rsquo;t it.
      </p>
    </article>
  </PageLayout>
);

export default NotFound;

export const config = {
  unstable_runtimeJS: false,
};
