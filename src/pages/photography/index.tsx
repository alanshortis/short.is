import type { NextPage, GetStaticProps } from 'next';
import { Page } from '@/layouts';
import { Footer } from '@/components';
import styles from './photography.module.scss';
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
    <Page title="Photography">
      <article>
        <div className={styles.masonry}>
          {photos.map(photo => (
            <div key={photo.id} style={{ aspectRatio: photo.ratio }}></div>
          ))}
        </div>
      </article>
    </Page>
    <Footer />
  </>
);

export default Photography;

export const config = {
  unstable_runtimeJS: false,
};
