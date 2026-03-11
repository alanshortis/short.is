export const Camera = {
  SONY: 'Sony DSC-F828',
  NIKON: 'Nikon D70',
  M6: 'Leica M6',
  M10M: 'Leica M10 Monochrom',
  M10P: 'Leica M10-P',
  MD: 'Leica M-D',
  GW670: 'Fujifilm GW670ii',
} as const;

export const Lens = {
  Summicron35: 'Leica Summicron-M 35mm f/2.0 ASPH',
  Summicron50: 'Leica Summicron 50mm f/2.0',
  Sigma1870: 'Sigma 18-70mm f/3.5-4.5',
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
  P43: '3 / 4',
  L43: '4 / 3',
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
    id: '2007',
    photos: [
      {
        name: '20070414-221349',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: '20070414-221929',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: '20070922-225724',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: '20070125-221414',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: '20070125-221032',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: '20080225-215945',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: '20070922-231735',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: '20070922-232806',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: '20070414-223407',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText: '',
        ratio: Ratio.L35,
      },
    ],
  },
  {
    id: '2005',
    photos: [
      {
        name: '20050821-180439',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.P43,
      },
      {
        name: '20050821-194414',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.L43,
      },
      {
        name: '20050821-201519',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.L43,
      },
      {
        name: '20050821-191257',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.P43,
      },
      {
        name: '20050821-202002',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.P43,
      },
      {
        name: '20050821-202917',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.L43,
      },
    ],
  },
];
