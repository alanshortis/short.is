import type { NextPage } from 'next';
import { Page } from '@/layouts';
import layoutStyles from '@/layouts/Page/Page.module.scss';
import contentStyles from '@/components/Markdown/Markdown.module.scss';

const NotFound: NextPage = () => (
  <Page title="404">
    <div className={layoutStyles.aside}>
      <h2>404</h2>
    </div>
    <article className={`${layoutStyles.mainContent} ${contentStyles.markdown}`}>
      <p className={contentStyles.large}>Whatever you&rsquo;re looking for is not here.</p>
      <p>
        short.is used to be a domain shortening service, so there is a chance you followed a link with the
        hope of seeing something cool. This probably isn&rsquo;t it.
      </p>
    </article>
  </Page>
);

export default NotFound;

export const config = {
  unstable_runtimeJS: false,
};
