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
    id: '2025',
    photos: [
      {
        name: 'L1000063',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1000096',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009958',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009949',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009945',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009842',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1009886',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009883',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009767',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009747',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009334',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1009698',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009503',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009482',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009478',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009396',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009332',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009266',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009658',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1009182',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1000046',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1009134',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1009090',
        location: '',
        camera: Camera.M10M,
        altText: '',
        ratio: Ratio.L35,
      },
    ],
  },
  {
    id: '2024',
    photos: [
      {
        name: 'L1008955',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1008835',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1007952',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1007912',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1007682',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1007673',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1007750',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.P35,
      },
      {
        name: 'L1007663',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1007659',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
      {
        name: 'L1007639',
        location: '',
        camera: Camera.MD,
        altText: '',
        ratio: Ratio.L35,
      },
    ],
  },
  {
    id: '2007',
    photos: [
      {
        name: 'DSC_7303',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Scroobius Pip on stage. Taken with a long exposure and a flash, making him appear sharp among blurred red lines. He is holding a microphone that is on a stand, and looking off the to the right',
        ratio: Ratio.P35,
      },
      {
        name: 'DSC_7956',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Joshua Idehen on stage. A microphone is on a stand in front of him and he has a clean white towel over his head. The flash has cast a shadow onto the low cieling above',
        ratio: Ratio.P35,
      },
      {
        name: 'DSC_4722',
        location: 'Cardiff',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Scroobius Pip on stage. The image appears to be a double exposure, with two Scroobius Pips each speaking into a microphone beside a projection screen that is too bright to make out',
        ratio: Ratio.L35,
      },
      {
        name: 'DSC_7987',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Musa Okwonga on stage. He is wearing a bright yellow tshirt and facing forwards while holding a microphone that is on a stand. The long expore makes blurred red lines dance off his arm, while he appears sharp, casting a shadow onto the low cieling above',
        ratio: Ratio.P35,
      },
      {
        name: 'DSC_8368',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Dan Le Sac on stage. He is staring intently at his laptop, while a microphone stand covers one eye and some of his face',
        ratio: Ratio.P35,
      },
      {
        name: 'DSC_7289',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Joshua Idehen on stage. His hand reaches into the foreground, and we can see his eyes between his fingers wifth a microphone beside his open mouth as he performs',
        ratio: Ratio.L35,
      },
      {
        name: 'DSC_8008',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph, Musa Okwonga on stage. He is wearing a bright yellow tshirt and facing to thge right of the frame and speaking into a microphone. The long expore means he has red lines forming semi-circles around him while he remains in focus',
        ratio: Ratio.P35,
      },
    ],
  },
  {
    id: '2005',
    photos: [
      {
        name: 'DSC02779',
        location: 'London',
        camera: Camera.SONY,
        altText:
          'The original photo used for the cover of the Scroobius Pip album "No Commercial Breaks", with Scroobius Pip appearing on a CCTV screen at a railway station, almost in silhouette',
        ratio: Ratio.L43,
      },
      {
        name: 'DSC05092',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          'Colour photograph, Dizzie Rascal on stage. Holding the mic high, covering some of his face below a baseball cap. His left hand is raised, and he stands in front of a background of many coloured lights',
        ratio: Ratio.P43,
      },
      {
        name: 'DSC05003',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          'Colour photograph, Goldfrapp on stage. Looking straight on at the stage, bathed in pink lights with columns of bright white light. Alison is centre stage and singing into a microphone on a stand',
        ratio: Ratio.L43,
      },
      {
        name: 'DSC05193',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.L43,
      },
      {
        name: 'DSC05217',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.P43,
      },
      {
        name: 'DSC05151',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText: '',
        ratio: Ratio.L43,
      },
      {
        name: 'DSC05224',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          'Colour photograph, Black Thought of The Roots on stage. He facing to the left, holding a microphone in his right hand and raising his left hand up, holding the cable. He is wearing a blue addidas hoody and a brown Yankees cap',
        ratio: Ratio.L43,
      },
    ],
  },
];
