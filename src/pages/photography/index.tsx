import type { NextPage, GetStaticProps } from 'next';
import { PhotosLayout } from '@/layouts';
import { Footer } from '@/components';
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
    <PhotosLayout title="Photography">
      {photos.map(photo => (
        <div key={photo.id} style={{ aspectRatio: photo.ratio }}></div>
      ))}
    </PhotosLayout>
    <Footer />
  </>
);

export default Photography;

export const config = {
  unstable_runtimeJS: false,
};
