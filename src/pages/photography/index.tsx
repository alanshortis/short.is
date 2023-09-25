import type { NextPage } from 'next';
import cx from 'classnames';
import { Full } from '@/layouts';
import layoutStyles from '@/layouts/Page/Page.module.scss';
import contentStyles from '@/components/Markdown/Markdown.module.scss';

const Photography: NextPage = () => (
  <Full title="Photography">
    <h2 className={layoutStyles.title}>Photography</h2>
    <article className={cx(layoutStyles.content, contentStyles.markdown)}>
      <p>Blah blah</p>
    </article>
  </Full>
);

export default Photography;

export const config = {
  unstable_runtimeJS: false,
};
