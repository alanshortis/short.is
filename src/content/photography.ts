export const Camera = {
  SONY: 'Sony DSC-F828',
  NIKON: 'Nikon D70',
  M6: 'Leica M6',
  M10M: 'Leica M10 Monochrom',
  M10P: 'Leica M10-P',
  MD: 'Leica M-D',
  GW670: 'Fujifilm GW670ii',
  HolgaSF: 'Holga 120SF',
  HolgaTLR: 'Holga 120TLR',
  Bronica: 'Bronica SQ-Ai',
} as const;

export const Lens = {
  Summicron35: 'Leica Summicron-M 35mm f/2.0 ASPH',
  Summicron50: 'Leica Summicron 50mm f/2.0',
  Elmarit90: 'Leica Elmarit-M 90mm f/2.8',
  Sigma1870: 'Sigma 18-70mm f/3.5-4.5',
  Zenzanon80: 'Zenzanon 80mm f/2.8',
} as const;

export const Film = {
  Portra400: 'Kodak Portra 400',
  Delta3200: 'Ilford Delta 3200',
  Ektar100: 'Kodak Ektar 100',
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
        name: '20250902-130538',
        location: 'Portland',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. A furniture store with a large neon sign out front that reads "RUGS". The light from the back of the sign lights up the white facade of the building',
      },
      {
        name: '20250111-142127',
        location: 'Seewiesen',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A backdrop of mountains and trees in winter, the wind has blown snow up into three abstract figures',
      },
      {
        name: '20250323-124817',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A person in a shiny jacket walks along the sunlit side of a building, with the shadow making the other side of the building appear dark. The curb and a cross-walk are in the foreground',
      },
      {
        name: '20250112-092414',
        location: 'Seewiesen',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. A small cabin on stilts over a lake in the winter. The wind is blowing the snow, making the background of the image amoung the trees look like a pencil drawing',
      },
      {
        name: '20250326-001633',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A department store at night, with three windows lit up containing mannequins. The furthest right window is under scaffolding, as is New York',
      },
      {
        name: '20250330-000358',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. Looking through a window of a restaurant all the way back into the kitchen where we can see a chef working. In the glass we can see reflections of exist signs and the 7-11 opposite',
      },
      {
        name: '20250330-011631',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. Looking into the entrace of a parking garage at an angle, the sign above is partially obstructed and appears to read "DO NOT"',
      },
      {
        name: '20250331-181459',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A slightly long exposure of a passing subway train, with only the elongated stripes of the USA flag discernable',
      },
      {
        name: '20250331-181500',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. Looking from one subway platform across to another, we see a person waiting for their train. A train passed on our side, framing the person in the gap between the cars',
      },
      {
        name: '20250331-220813',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          "Black and white photograph. In the blurred foreground, a father takes a photo of his son who is looking at the Statue of Liberty, in focus in the distance. The son's image can be made out on the father's phone screen",
      },
      {
        name: '20250831-141853',
        location: 'Seattle',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. The extrance to a parking garage shot straight across the street. Because of how steep the hill is and the road appearing flat on the horizon, it looks like the garage is leaning at a severe angle',
      },
      {
        name: '20250331-013150',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. Looking up the side of Occulus, the steel construction looks like lines going into the distance where we six bright lights',
      },
      {
        name: '20250831-151803',
        location: 'Seattle',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A blacked out building shot head on, with the remains of a backlit sign that shows only the four flourscent tubes',
      },
      {
        name: '20250902-140426',
        location: 'Portland',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A row of stools along a bar in an old diner. Each stool facing the same way, each with an indeintically placed coffe cup on the bar',
      },
      {
        name: '20250902-185057',
        location: 'Portland',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. Two Chevrolet trucks on a driveway, one beside a large garage and another on the grass emerging from the trees, behind a low rope divider',
      },
      {
        name: '20250903-162056',
        location: 'Cannon Beach',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          "Black and white photograph. Looking across a misty beach, with the silhouette's of people walking in the distance",
      },
      {
        name: '20250904-142429',
        location: 'Hoh Rainforest',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. Trees covered in thick moss, against a forest floor covered in ferns. Light is bleeding through from the tops of the canopy',
      },
      {
        name: '20250905-132046',
        location: 'Seattle',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. A building with a neon sign that reads "Bread of Live Mission", two men sit inside',
      },
      {
        name: '20250903-163444',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A large rock formation beyond a beach, emerging from from spray and mist. A person in the foreground is emerging from the sea',
      },
      {
        name: '20250904-201705',
        location: 'Hurricane Ridge',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. A view across some mountains that appear to intersect, with dense forests and haze seaprating each side',
      },
      {
        name: '20250905-195841',
        location: 'Seattle',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. Looking down on a woman in a library, reclining on a chair with her feet up on the table, appearing to take a nap. The sun casts geometric shadows across the carpet',
      },
      {
        name: '20250524-090210',
        location: 'New York',
        camera: Camera.M10M,
        lens: Lens.Summicron35,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. Looking down on a New York street from some height, very early morning. Street markings run across the image at an angle and we can see into an illuminated building which forms part of the United Nations',
      },
    ],
  },
  {
    id: '2024',
    photos: [
      {
        name: '20240522-202629',
        location: 'London',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.P35,
        altText:
          'Colour photograph. Looking forwards from the front of a DLR train towards a station, we see the rails reflecting light and surrounded bu buildings on all sides',
      },
      {
        name: '20240316-141203',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. Looking across a subway platform into the open door of a stopped subway train with faded seats that were probably once red ',
      },
      {
        name: '20240316-160249',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. Looking across a street underneath elevated subway tracks, we see a person with their back to us using their phone. They are stanging outside a store with a sign that reads "DELI & GRILL"',
      },
      {
        name: '20240620-171624',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.P35,
        altText:
          'Colour photograph. A construction worker inside a skip, emptying a rubble sack. He wears day-glow green and orange, and is slightly obscured by platic netting that shrouds the scaffolding in the foreground',
      },
      {
        name: '20240316-160939',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. A side view of a silver Ford Bronco with some rust, parked under some elevated subway tracks which are out of frame but casting a shadow. In the background we see a sign for "45 AV"',
      },
      {
        name: '20240317-145734',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. Looking from a street towards an avenue, a man is on the corner wearing a red baseball cap and walking a small dog. In the background we see yellow traffic lights and a yello taxi',
      },
      {
        name: '20241117-233816',
        location: 'Atlanta',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.P35,
        altText:
          'Colour photograph. Looking out a floor-to-ceiling window over a city, with a particularly prominent tower. A bed and carpeted floor are in the foreground, out of focus',
      },
      {
        name: '20240318-120637',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. Looking straight across a street into a fish market where we can see people working and prepared fish in ice with prices. The shop sign reads "127 MOTT ST. DAHING SEAFOOD MARKET"',
      },
      {
        name: '20240619-155357',
        location: '',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. A side view of a derelict but once-grand road side diner, finished in chrome and red. The awning is mouldy and weeds grow around the exteriror walls. Nearby trees are reflected and refracted in the polished chrome',
      },
      {
        name: '20240621-193850',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. A step-through Raleigh bicycle locked to a pole topped with a sign that reads "NO STANDING Anytime" as a man walks behind, pushing a bicycle of his own that has a sack draped over the crossbar',
      },
      {
        name: '20241116-215206',
        location: 'Birmingham',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.P35,
        altText:
          'Colour photograph. Looking through a curved bay window of a shop front, past a white pick-up truck towards a shop named "Jeans Glory"',
      },
      {
        name: '20240622-140528',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. A road-side ice cream stand, clad in red against lush green trees and bushes. Two signs read "SORRY WE\'RE CLOSED"',
      },
      {
        name: '20241112-193755',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. On balcony looking towards a city, a lone woman sits in a chair looking away from us, surrounded by other chairs which are all empty',
      },
      {
        name: '20241119-015852',
        location: 'New York',
        camera: Camera.MD,
        lens: Lens.Summicron50,
        ratio: Ratio.L35,
        altText:
          'Colour photograph. A woman at the top of the steps of a subway station at night. There are road works in the background, and in the foreground but out of focus we see a sign that reads "33 Street"',
      },
    ],
  },
  {
    id: '2023',
    photos: [
      {
        name: '20260311-202842',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. Lower Wacker Drive in Chicago, looking across a the street to see three entrances. A track is leaving from the left, the middle appears empty with lights inside and has a sign above that reads "DO NOT ENTER", and the third is mostly out of frame',
      },
      {
        name: '20260311-202827',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. A minimal bench on a marble floor, with no one sitting at it. It sits in front of very tall net curtains covering a large window',
      },
      {
        name: '20260311-203022',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. A workman on a scissor lift, looking down at something. He\'s wearing light coloured overalls and a baseball cap. The scissor lift is under chicago, and we see the address "E. North Water Street" painted on the wall in the background',
      },
      {
        name: '20260311-204238',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. Inside the L in Chicago, with the very wide angle lens used we can see a lot of the inside and outside of the train as it traverses a bend in The Loop',
      },
      {
        name: '20260311-204328',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.L35,
        altText:
          'Black and white photograph. From an enclosed parking area, we can see out into Chicago. A sign that reads "WENDELL BOAT RIDE" hangs in the opening',
      },
      {
        name: '20260311-203323',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.P35,
        altText:
          "Black and white photograph. In a back street, looking at some steps into a building. The inside of the alcove is painted white, and we can't quite see around to the door. There is a no smoking sign, and some other words painted on the wall that look official but are mostly obstructed",
      },
      {
        name: '20260311-204028',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. Looking across a street at a diner, where we can see customers and waiters inside an awning. The neon sign is bright and hard to read, but we can see "BRUNCH" in glass that is not illuminated',
      },
      {
        name: '20260311-204202',
        location: 'Chicago',
        camera: Camera.M6,
        lens: Lens.Summicron50,
        film: Film.Delta3200,
        ratio: Ratio.P35,
        altText:
          'Black and white photograph. A doorway in a backstreet, closed and with a cage over it that carries a sign that reads "NO TRESSPASSING". A bright light is over the door, and there are rat traps on the floor',
      },
    ],
  },
  {
    id: '2022',
    photos: [
      {
        name: '20260329-102924',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. A delapidated house clad in red panels sits behind a fence and is surrounded by trees and bushes. A red BMW 3 series compact sits on the driveway in front of a garage whos door is obstracted by more trees and bushes',
      },
      {
        name: '20260326-152755',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A brown Oldsmobile parked against a yellow curb beside a street light. The driver door is open',
      },
      {
        name: '20260326-152858',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. The back of a white Tesla, parked outside a shuttered storefont named "CHUANG YE ELECTRICAL SUPPLIES LTD"',
      },
      {
        name: '20260327-174400',
        location: 'Stockholm',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. Looking across a railway platform in the winter, a person has their back to us as they stand in the sun',
      },
      {
        name: '20260327-174015',
        location: 'Stockholm',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. Ten empty chairs inside a marble church beside some candles, with ligh coming through a large window',
      },
      {
        name: '20260326-153025',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. An orange plastic chimney spewing steam from the sewers, with a bisy street behind',
      },
      {
        name: '20260327-174241',
        location: 'Stockholm',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. Outside a red brick church in the snow, with a crucifix attached by its side to a curved wall',
      },
      {
        name: '20260327-174848',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A store selling produce tries to keep their stock out of the sun with green and blue awnings and umbreallas. The sign on the side of the shop readss "CHANG CHEN GROCERY"',
      },
      {
        name: '20260327-175620',
        location: 'Stockholm',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. An intersction of two cobbled streets, with a red no entry sign contrasting the green and cream pastel of the buildings',
      },
      {
        name: '20260327-175157',
        location: 'Stockholm',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. Looking up three escalators in a Stockholm metro station, with red rocks cut unevenly through the tunnel',
      },
      {
        name: '20260329-105240',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. Looking directly on to a wood door, with the number "228" appearing on the glass and on an awning above in very different font styles. We can see someone reflected in the glass',
      },
      {
        name: '20260327-175842',
        location: 'Stockholm',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A person looks out over the water from a ferry, towards a themepark on the opposite shore. A sign reads "DO NOT TOUCH THE GATE" in both English and Swedish',
      },
      {
        name: '20260329-102812',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. Two large orange traffic cones sit on rough ground in front of an abandoned van, liveried with "A&S PIZZA"',
      },
      {
        name: '20260329-103044',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. A street corner with mailboxes and roadworks. Someone in a wheelchair is copped by the left of the image, and a flock of pigeons fly up and towards us while others keep eating whatever is on the floor',
      },
      {
        name: '20260329-105207',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A building with large windows seaprated by white columns has a pattern of hexagons cast across it, almost making it look pixelated',
      },
      {
        name: '20260329-104931',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. A red door with an air conditionaer above it sits in the grey wall of a building. Glass bricks and other small red details have shadows cast across them',
      },
      {
        name: '20260329-103510',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. A street corner beside what looks like a Chinese reaturant. A red car is on the street behind, and a blue electric scooter waits outside',
      },
      {
        name: '20260401-143230',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.P67,
        altText:
          'Colour photograph. A building of red brick and pastel green with a stoop that is gated off. A small barred window looks out from a basement, and a metal light hangs over the door. Shadows fall down the building at an angle',
      },
    ],
  },
  {
    id: '2010',
    photos: [
      {
        name: '20260326-152755',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A brown Oldsmobile parked against a yellow curb beside a street light. The driver door is open',
      },
    ],
  },
  {
    id: '2009',
    photos: [
      {
        name: '20260326-152755',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A brown Oldsmobile parked against a yellow curb beside a street light. The driver door is open',
      },
    ],
  },
  {
    id: '2008',
    photos: [
      {
        name: '20260326-152755',
        location: 'New York',
        camera: Camera.GW670,
        film: Film.Portra400,
        ratio: Ratio.L67,
        altText:
          'Colour photograph. A brown Oldsmobile parked against a yellow curb beside a street light. The driver door is open',
      },
    ],
  },
  {
    id: '2007',
    photos: [
      {
        name: '20070414-221349',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph. Joshua Idehen on stage, holding his hand out towards us and domincating the frame. We can his eye between his fingers as he speaks into the microphone',
        ratio: Ratio.L35,
      },
      {
        name: '20070414-221929',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Black and white photograph. Scroobius Pip on stage, speaking into the microphone with his eyes closed. He is wearing two ties for some reason',
        ratio: Ratio.P35,
      },
      {
        name: '20070125-221032',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          "Colour photograph. Dan le Sac on stage, with the double exposure make it seem as if he has three arms and two heads. He's using his laptop and a midi interface while sitting in front of a blue wall with a piece of paper taped to it, with Myspace URLs hand written on it",
        ratio: Ratio.L35,
      },
      {
        name: '20070922-225724',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph. Joshua Idehen on stage, standing in front of the microphone by not appearing to say anything. He has a white towel over his head and is looking off to his right',
        ratio: Ratio.P35,
      },
      {
        name: '20070922-232806',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph. Musa Okwonga on stage. He is holding a microphone in his left hand is looking to our right, while wearing a yellow tshirt. The long exposure means he has some red light trails circled around him',
        ratio: Ratio.P35,
      },
      {
        name: '20070125-221414',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph. Scroobius Pip on stage, holding up a poster of the periodoc table. The double exposure means we can see two of him, as he holds the mocrophone in his right hand',
        ratio: Ratio.L35,
      },
      {
        name: '20070414-223407',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          "Colour photograph. Scroobius Pip on stage, speaking into the microphone on a stand. He's gesturing with his right hand and holding a large book in his right",
        ratio: Ratio.L35,
      },
      {
        name: '20080225-215945',
        location: 'London',
        camera: Camera.NIKON,
        lens: Lens.Sigma1870,
        altText:
          'Colour photograph. Dan le Sac on stage, working hard on his laptop. A microphone stand in the foreground covers his right eye, but we can still see his left',
        ratio: Ratio.P35,
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
        altText:
          'Colour photograph. Alison Goldfrapp on stage, against a background of pink and yellow. She is in a black outfit with large shoulders, sining into a microphone on a stand',
        ratio: Ratio.P43,
      },
      {
        name: '20050821-194414',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          "Colour photograph. Alex Kapranos of Franz Ferdinand on stage, in front of a backdrop of the band logo which is mostly out of shot. He's playing a black telecaster and wearing a red and black stired shirt under a black and white jacket",
        ratio: Ratio.L43,
      },
      {
        name: '20050821-201519',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          'Colour photograph. Christian Grahn of The Hives on stage, behind a white Premier kit. He looks surprised by the drums, while wearing a white suit with a black shirt',
        ratio: Ratio.L43,
      },
      {
        name: '20050821-191257',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          'Colour photograph. Dizzie Rascal on stage, against a backgroup of pink and blue. He holding the microphone and pointing with his left hand',
        ratio: Ratio.P43,
      },
      {
        name: '20050821-202002',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          "Colour photograph. Niklas Almqvist of The Hives on stage. Dressed in a white suit jacket with black trousers, he's leaning to his right while playing guitar. we can see drums and the band's name in neon behind him",
        ratio: Ratio.P43,
      },
      {
        name: '20050821-202917',
        location: 'Chelmsford',
        camera: Camera.SONY,
        altText:
          "Colour photograph. Black Thought of The Roots on stage, with the microphone in his right hand and holding the lead up in his left. He's wearing a blue addidas hoodie with a large gols chain over it, and a brown baseball cap",
        ratio: Ratio.L43,
      },
    ],
  },
];
