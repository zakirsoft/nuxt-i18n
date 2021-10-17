// <!-- TODO[epic=Products] --> whitch way is better to do it? i have pictures fo the slider... description and table for productdetail here

export const state = () => ({
  scooter: {
    id: 3,
    name: "Scooter",
    images: [
      {
        isMainImage: true,
        path: "/images/products/scooter/scooter.png",
      },
      {
        path: "/images/products/scooter/scooter-white.png",
      },
      {
        path: "/images/products/scooter/scooter-black.png",
      },
      {
        path: "/images/products/scooter/scooter-blue.png",
      },
      {
        path: "/images/products/scooter/scooter-red.png",
      },
    ],
    url: "produkte/scooter",
    description:
      "The agile, fast Cityscooter is a stable bicycle with very comfortable handling characteristics. Foldable within seconds to a handy size it is the practical companion in public means of transport, in the car and on journeys. The Maderna Cityscooter is characterised particularly by his durable, joint-free frame and the easy handling. It is out now in its 4th generation with optimized aluminium  frame and top components.",

    specifications: [
      {
        key: "Rahmen",
        value: "ALU 7005 powdercoated",
      },
      {
        key: "Farben",
        value: "propagandablue, yeswecanblack, lipstickred",
      },
      {
        key: "Radgröße",
        value: "18″ X 1,75 Autoventil",
      },
      {
        key: "Schaltung",
        value: "Shimano Nexus 3-gear",
      },
      {
        key: "Bremsen",
        value: "front: V-brake rear: coaster/V-brake",
      },
      {
        key: "Sitz",
        value: "elastomer",
      },
      {
        key: "Fahrer",
        value: "110Kg /195cm",
      },
      {
        key: "Gewicht",
        value: "10,8 kg",
      },
      {
        key: "Faltmaß",
        value: "104/117 X 69cm",
      },
      {
        key: "Lieferzeit",
        value: "jederzeit",
      },
    ],
    configurations: [
      {
        key: "Farbe",
        type: "colorPicker",
        options: [
          {
            value: "blau",
            code: "blue",
            price: 0,
          },
          {
            value: "schwarz",
            code: "black",
            price: 0,
          },
          {
            value: "weiß",
            code: "white",
            price: 0,
          },
          {
            value: "rot",
            code: "red",
            price: 0,
          },
        ],
      },
      {
        key: "Bremse",
        options: [
          {
            value: "Rücktrittbremse",
            price: 499,
          },
          {
            value: "V-Breake",
            price: 499,
          },
        ],
      },
    ],
  },
  truck: {
    id: 2,
    name: "Truck",
    images: [
      {
        isMainImage: true,
        path: "/images/products/truck/truck.png",
      },
      {
        path: "/images/products/truck/truck-2.jpg",
      },
      {
        path: "/images/products/truck/truck-3.jpg",
      },
      {
        path: "/images/products/truck/truck-4.jpg",
      },
      {
        path: "/images/products/truck/truck-5.jpg",
      },
    ],
    url: "produkte2/truck",
    description:
      "This single-track ﬂatbed cargo bike is virtually a haul-all. for commercial use, delivery services and craftsmen.The new cargo bed measures 89x60cm / 35×24” this is more than a half size EUR-pallet. Now it can even load standardized thermo-boxes and offers a perfect loading area for all kind of crates and stackable euro boxes. The freight can be secured to the four lashing eyes with straps. The new cargo bed measures 89x60cm / 35×24 this is more than a half size EUR-pallet. Now it can even load standardized thermo-boxes and offers a perfect loading area for all kind of crates and stackable euro boxes. The freight can be secured to the four lashing eyes with straps. Thanks to its low cargo bed behind the rider, all goods can be loaded even when bulky, heavy or tall. Oversize goods are no problem. Whatever seems too big may overlap and will not stand in the rider’s way. Poles up to three metres long can be transported and ﬁnd additional support on the cross-beam at the head tube. The Maderna Truck rides like a short MTB with a long tail. Thanks to its extremely torsion-free frame and the low cargo bed behind the rider, the MCS Truck remains manoeuvrable, safe and easy to control, even when heavily loaded. The rear swing arm works with an elastomer suspension and protects the load from road bumps and vibrations. The wide double-leg centre kickstand keeps the bike upright and stable while loading.",
    specifications: [
      {
        key: "Frame",
        value: "Precision steel tubing, powder-coated",
      },
      {
        key: "Wheel size",
        value: "Schwalbe Big Ben 20″ 2,15″",
      },
      {
        key: "Wheelbase",
        value: "212cm",
      },
      {
        key: "Gears",
        value: "Sram X5 derailleur 27gears / Shimano Alﬁne8 hub gear",
      },
      {
        key: "Brakes",
        value:
          "FW: Avid, hydraulic disc brake; 160mm. RW: Avid, mechanical disc brake; 160mm",
      },
      {
        key: "Weight",
        value: "from 28kg",
      },
      {
        key: "Load capacity",
        value: "120kg + rider = 200kg",
      },
      {
        key: "Load platform size",
        value: "89 x 60cm / 35 x 24 inch",
      },
      {
        key: "Optional accessories:",
        value: "Truck cargo tub, Electric assist",
      },
    ],
    configurations: [
      {
        key: "Ladefläche",
        options: [
          {
            value: "Widerstandsfähige Holzsiebdruckplatte",
            price: 0,
          },
          {
            value: "Wanne",
            price: 690,
          },
          {
            value: "SlideBox",
            price: 1260,
          },
          {
            value: "BigBox",
            price: 1220,
          },
        ],
      },
      {
        key: "Motor",
        options: [
          {
            value: "Ohne Motor",
            price: 0,
          },
          {
            value: "VR Nabenmotor (250-500W inkl. 16Ah Akku)",
            price: 1570,
          },
          {
            value: "Mittelmotor (250-500W inkl. 16Ah Akku)",
            price: null,
          },
        ],
      },
    ],
  },
  tractor: {
    id: 1,
    name: "Traktor",
    images: [
      {
        isMainImage: true,
        path: "/images/products/tractor/tractor.png",
      },
      {
        path: "/images/products/tractor/tractor-2.jpg",
      },
      {
        path: "/images/products/tractor/tractor-3.jpg",
      },
      {
        path: "/images/products/tractor/tractor-4.jpg",
      },
      {
        path: "/images/products/tractor/tractor-5.jpg",
      },
    ],
    url: "produkte/traktor",
    price: 999,
    description:
      "The TRACTOR is free to use any bicycle trac and fits through any door. This is unique for cargo bikes of this size. Despite the small width of 80cm only the TRACTOR provides extremely good curve stability if loaded or unloaded. The extemely small turnig radius of only 2,5m gives the TACTOR the flexibility to turn around even in narrow roads and gateways. The adaptive 4 wheel chassis suspension adapts on any road surface and road kurbs and protects the load from road bumps and vibrations. The cargo bed can take a full size EUR-pallete. Thanks to its huge cargo bed behind the rider, all goods can be loaded even when bulky, heavy or tall. Whatever seems too big may overlap and will not stand in the rider’s way. The freight can be secured to the four lashing eyes with straps or in one of the various lockable cargo boxes that are produced on request.",
    specifications: [
      {
        key: "Size total",
        value: "238 x 80cm",
      },
      {
        key: "Load platform size",
        value: "120 x 80cm / 48″ x 32″ (1 EUR-palette)",
      },
      {
        key: "Load capacity",
        value:
          "200 Kg / 400 lb + driver (heavy duty wheels) or 95 kg / 198 lg + driver (bicycle wheels)",
      },
      {
        key: "Turning Radius",
        value: "2,5 m",
      },
      {
        key: "Frame",
        value: "Alu, powder coated",
      },
      {
        key: "Suspension",
        value: "Rear Wheel suspension 5 cm / 2″ travel and 4 wheel balancer",
      },
      {
        key: "Wheels",
        value: "Schwalbe Big Ben 20“/2,15 or Kenda Kwest 16“x1,50″",
      },
      {
        key: "Gears",
        value:
          "Shimano Alfine 8 gear hub or NuVinci Continuously Variable Transmission",
      },
      {
        key: "Motor",
        value: "Bafang 250 – 500 W electric assist",
      },
      {
        key: "Breaks",
        value:
          "Tectro hydraulic disc brakes for all 4 wheels in 2 separate circuits",
      },
      {
        key: "Accessories",
        value: "Customized cargo boxes (cooled / uncooled) on request",
      },
    ],
    configurations: [
      {
        key: "Ladefläche",
        options: [
          {
            value: "Widerstandsfähige 12mm Holzsiebdruckplatte",
            price: 0,
          },
          {
            value: "Aluminium BOX",
            price: null,
          },
        ],
      },
      {
        key: "Motor",
        options: [
          {
            value: "250W Motor",
            price: 0,
          },
          {
            value: "600W Motor",
            price: 50,
          },
        ],
      },
      {
        key: "Akku",
        options: [
          {
            value: "36V/14Ah",
            price: 0,
          },
          {
            value: "36V/17Ah",
            price: 100,
          },
        ],
      },
    ],
  },
  buge: {
    id: 4,
    description:
      "The TRACTOR is free to use any bicycle trac and fits through any door. This is unique for cargo bikes of this size. Despite the small width of 80cm only the TRACTOR provides extremely good curve stability if loaded or unloaded. The extemely small turnig radius of only 2,5m gives the TACTOR the flexibility to turn around even in narrow roads and gateways. The adaptive 4 wheel chassis suspension adapts on any road surface and road kurbs and protects the load from road bumps and vibrations. The cargo bed can take a full size EUR-pallete. Thanks to its huge cargo bed behind the rider, all goods can be loaded even when bulky, heavy or tall. Whatever seems too big may overlap and will not stand in the rider’s way. The freight can be secured to the four lashing eyes with straps or in one of the various lockable cargo boxes that are produced on request. MCS Truck has been developed and designed by Paris Maderna / MCS Maderna Cycle Systems in Vienna and is produced and assembled in Austria and the EU.",
    name: "Bug-E",
    images: [
      {
        isMainImage: true,
        path: "/images/buge-1.jpg",
      },
      {
        path: "/images/buge-1.jpg",
      },
    ],
    url: "produkte/buge",
  },
  cip: {
    id: 5,
    title: "Currently in Production",
    snippet:
      "User say these are the best fire extinguishers to rent if your house is burning down.",
    cards: [
      {
        id: 19,
        title: "Scooter",
        category: "Folding",
        snippet: "Tub 100L in RAL colour of request",
        image: "wanne.png",
      },
      {
        id: 20,
        title: "Truck",
        category: "Cargo",
        snippet:
          "Aluminium alloy, 300L with Slidedoor and Slamlock lockable in RAL colour of request",
        image: "slidebox.png",
      },
      {
        id: 21,
        title: "Tractor",
        category: "Cargo",
        snippet:
          "500L mit Hingedoor and Slamlock lockable in RAL colour of request",
        image: "bigbox.png",
      },
    ],
  },
  op: {
    id: 6,
    title: "Previous Projects",
    snippet:
      "Take down that fire lavishly and in style with our luxury extinguishers.",
    cards: [
      {
        id: 22,
        title: "Vintage 1864 ",
        category: "open",
        snippet:
          "This is hands down the worst fire extinguisher you can use in a crisis. The radiation will kill you if the fire doesn't",
        image: "bigbox.png",
      },
      {
        id: 23,
        title: "Pure Silver & Gold ",
        snippet:
          "This one is made out of 50k worth of pure silver and white gold. The metal choice was a poor for functionality, but was great for style!",
        image: "bigbox.png",
      },
      {
        id: 24,
        title: "Two in One Fire",
        category: "open",
        snippet:
          "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
        image: "bigbox.png",
      },
    ],
  },
  references: {
    id: 7,
    title: "References",
    snippet:
      "Take down that fire lavishly and in style with our luxury extinguishers.",
    cards: [
      {
        id: 22,
        title: "Mulo",
        category: "transport",
        year: 2021,
        snippet:
          "This is hands down the worst fire extinguisher you can use in a crisis. The radiation will kill you if the fire doesn't",
        image: "bigbox.png",
      },
      {
        id: 23,
        title: "Velo",
        category: "folding",
        year: 2018,
        snippet:
          "This one is made out of 50k worth of pure silver and white gold. The metal choice was a poor for functionality, but was great for style!",
        image: "bigbox.png",
      },
      {
        id: 24,
        title: "Fahhradi",
        category: "Art-Work",
        year: 2021,
        snippet:
          "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
        image: "bigbox.png",
      },
      {
        id: 24,
        title: "Fahrdinand",
        category: "Art-Work",
        year: "?",
        snippet:
          "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
        image: "bigbox.png",
      },
    ],
  },
});
