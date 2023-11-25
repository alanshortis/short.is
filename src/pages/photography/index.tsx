import type { NextPage } from 'next';
import { Full } from '@/layouts';
import { Footer } from '@/components';
import styles from './Photography.module.scss';

const Photography: NextPage = () => (
  <>
    <Full title="Photography">
      <article>
        <div className={styles.masonry}>
          <div style={{ aspectRatio: '3 / 2' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '6 / 6' }}></div>
          <div style={{ aspectRatio: '6 / 7' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '2 / 3' }}></div>
          <div style={{ aspectRatio: '6 / 6' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '3 / 2' }}></div>
          <div style={{ aspectRatio: '6 / 6' }}></div>
          <div style={{ aspectRatio: '3 / 2' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '6 / 6' }}></div>
          <div style={{ aspectRatio: '6 / 7' }}></div>
          <div style={{ aspectRatio: '7 / 6' }}></div>
          <div style={{ aspectRatio: '3 / 2' }}></div>
          <div style={{ aspectRatio: '6 / 6' }}></div>
        </div>
      </article>
    </Full>
    <Footer />
  </>
);

export default Photography;

export const config = {
  unstable_runtimeJS: false,
};
