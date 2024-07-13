import type { NextPage } from 'next';
import { Page } from '@/layouts';
import layoutStyles from '@/layouts/Page/Page.module.scss';
import styles from './index.module.scss';

const NotFound: NextPage = () => (
  <Page title="404">
    <h2 className={layoutStyles.title}>404</h2>
    <article className={layoutStyles.content}>
      <p className={styles.large}>Whatever you were hoping to see is not here.</p>
      <p className={styles.large}>
        short.is used to be a domain shortening service, so there is a chance you followed a link with the
        hope of seeing something cool. This probably isn’t it.
      </p>
    </article>
  </Page>
);

export default NotFound;

export const config = {
  unstable_runtimeJS: false,
};
