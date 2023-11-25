import type { NextPage } from 'next';
import { Full } from '@/layouts';

const Photography: NextPage = () => (
  <Full title="Photography">
    <article>
      <p>Blah blah</p>
    </article>
  </Full>
);

export default Photography;

export const config = {
  unstable_runtimeJS: false,
};
