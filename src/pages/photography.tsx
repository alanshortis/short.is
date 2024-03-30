import type { NextPage } from 'next';
import { Full } from '@/layouts';

const Photography: NextPage = () => (
  <>
    <Full>
      <h1 className="hidden">Photography</h1>
    </Full>
  </>
);

export default Photography;

export const config = {
  unstable_runtimeJS: false,
};
