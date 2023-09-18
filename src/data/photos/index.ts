import { Camera, Lens, Film } from './kit';

interface Photo {
  id: number;
  camera: Camera;
  lens?: Lens;
  film: Film;
  location: string;
}

export const photos: Photo[] = [
  {
    id: 255,
    camera: Camera.HOLGA_TLR,
    film: Film.DELTA_400,
    location: 'New York',
  },
];
