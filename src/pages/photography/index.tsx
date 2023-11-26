import type { NextPage, GetStaticProps } from 'next';
import { Full } from '@/layouts';
import { Footer } from '@/components';
import styles from './Photography.module.scss';
import { type Photo, shuffledPhotos } from '../../data';

interface Props {
  photos: Photo[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      photos: shuffledPhotos,
    },
  };
};

const Photography: NextPage<Props> = ({ photos }) => (
  <>
    <Full title="Photography">
      <article>
        <div className={styles.masonry}>
          {photos.map(photo => (
            <div key={photo.id} style={{ aspectRatio: photo.ratio }}></div>
          ))}
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
