export const Camera = {
  M6: 'Leica M6',
  M10M: 'Leica M10 Monochrom',
  M10P: 'Leica M10-P',
  MD: 'Leica M-D',
  GW670: 'Fujifilm GW670ii',
} as const;

export const Lens = {
  Summicron35: 'Leica Summicron-M 35mm f/2.0 ASPH',
  Summicron50: 'Leica Summicron 50mm f/2.0',
} as const;

export const Film = {
  Portra400: 'Kodak Portra 400',
  Delta3200: 'Ilford Delta 3200',
} as const;

export const Ratio = {
  Square: '1 / 1',
  L35: '3 / 2',
  P35: '2 / 3',
  L67: '7 / 6',
  P67: '6 / 7',
} as const;

interface Photo {
  name: string;
  location: string;
  altText: string;
  camera: (typeof Camera)[keyof typeof Camera];
  lens?: (typeof Lens)[keyof typeof Lens];
  film?: (typeof Film)[keyof typeof Film];
  ratio: (typeof Ratio)[keyof typeof Ratio];
}

interface PhotoYear {
  id: string;
  photos: Photo[];
}

export const photographyData: PhotoYear[] = [
  {
    id: '2026',
    photos: [
      {
        name: '1',
        location: 'Location 1',
        camera: Camera.M6,
        lens: Lens.Summicron35,
        altText: 'Alt Text 1',
        ratio: Ratio.P35,
      },
      {
        name: '2',
        location: 'Location 2',
        camera: Camera.M10P,
        altText: 'Alt Text 2',
        ratio: Ratio.L67,
      },
    ],
  },
  {
    id: '2025',
    photos: [
      {
        name: '1',
        location: 'Location 1',
        camera: Camera.M6,
        lens: Lens.Summicron35,
        film: Film.Portra400,
        altText: 'Alt Text 1',
        ratio: Ratio.L35,
      },
    ],
  },
  {
    id: '2024',
    photos: [
      {
        name: '2',
        location: 'Location 2',
        camera: Camera.M10P,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        altText: 'Alt Text 2',
        ratio: Ratio.Square,
      },
    ],
  },
];
