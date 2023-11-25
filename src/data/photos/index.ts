import { Camera, Lens, Film, Ratio } from './kit';

interface Photo {
  id: number;
  camera: Camera;
  lens?: Lens;
  film: Film;
  ratio: Ratio;
  location: string;
  year: number;
}

export const photos: Photo[] = [
  {
    id: 255,
    camera: Camera.HOLGA_TLR,
    film: Film.DELTA_400,
    location: 'New York',
    year: 2007,
    ratio: Ratio.SIXSIX,
  },
];
