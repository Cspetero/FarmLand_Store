export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/newImages/Geemy Electric Hair Trimmer Barbering Machine.png",
    name: "Geemy Electric Hair Trimmer Barbering Machine",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1800,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/newImages/ailyons1.png",
    name: "AILYONS HD-198A Electric Dry Iron Box White & Blue",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 1500,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/newImages/tv_wall_bracket.png",
    name: "Tv Wall Bracket",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 499,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/newImages/Pioneer Car Subwoofer 12 30 CM 1400 Watts Bass Speaker.png",
    name: "Pioneer Car Subwoofer 12 30 CM 1400 Watts Bass Speaker",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 2300,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/newImages/solar_monitoring_lamb1.png",
    name: "Solar Monitoring Lamb",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 1500,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/newImages/enershower3.png",
    name: "Enershower",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 550,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/newImages/zeriotti_blow_dry.png",
    name: "zeriotti_blow_dry",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/newImages/mindy3.png",
    name: "Mindy Padlock",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 1400,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/newImages/solar_M_lambs4.png",
    name: "solar Monitoring Lamb",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/newImages/solar_light4.png",
    name: "Adapter cable",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 500,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/newImages/bulb_holder.png",
    name: "Lamb Holder",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 200,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/newImages/Mindy Secure Padlock Size Large 70mm.png",
    name: "Poltry Bulb.png",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/newImages/cooker_socket_control.png",
    name: "Cooker Socket Control",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/newImages/2.5mm single core electrical cable.png",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/newImages/motobike_audio.png",
    name: "Motobike Audio",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 799,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/newImages/1 Gang, 2, 3 & 4 Gangs Electric Switch.png",
    name: "1 Gang, 2, 3 & 4 Gangs Electric Switch",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/newImages/4PCS-Black-Long -Allen-Key-Socket-Bit-Set-Screw-Driver-Tool-Kit-NEW.png",
    name: "4PCS-Black-Long -Allen-Key-Socket-Bit-Set-Screw-Driver-Tool-Kit-NEW",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/newImages/Digital Multimeter Mini Digital Multimeter AC DC Tester Voltmeter-Yellow.png",
    name: "Digital Multimeter Mini Digital Multimeter AC DC Tester Voltmeter-Yellow",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/newImages/Electric Meter Box Steel & Lockable 13x13.png",
    name: "Electric Meter Box Steel & Lockable 13x13",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/newImages/Cr-V Torx Screwdriver Set With Hole Magnetic T5-T30 Screw.png",
    name: "Cr-V Torx Screwdriver Set With Hole Magnetic T5-T30 Screw.png",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/newImages/Double or Twin Wall Socket Box 250V 13A.png",
    name: "Double or Twin Wall Socket Box 250V 13A",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/newImages/Cable Clips 8mm To 14mm,100 Per Set Or Several Sets.png",
    name: "Cable Clips 8mm To 14mm,100 Per Set Or Several Sets.png",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/newImages/Tolsen Tape Measure 3M- 5M-7.5M -8M -  10M Tolsen Measuring Tape Heavy Duty Best.png",
    name: "Tolsen Tape Measure 3M- 5M-7.5M -8M -  10M Tolsen Measuring Tape Heavy Duty Best",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/newImages/Neelux 30w, 50w, 100w, 200w, 300w Quality LED FLOOD LIGHT.png",
    name: "Neelux 30w, 50w, 100w, 200w, 300w Quality LED FLOOD LIGHT.png",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/newImages/Neelux Electric Mosquito Flies Killer Bulb.png",
    name: "Neelux Electric Mosquito Flies Killer Bulb",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/newImages/Power King Extension Cable With 6 AC Power Outlets, 13A, And 2 M Long Cable.png",
    name: "Power King Extension Cable With 6 AC Power Outlets, 13A, And 2 M Long Cable",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/newImages/SE27 Lamp Holder Hanging Wire Chandelier Lamp Holder Bulb Bas.png",
    name: "SE27 Lamp Holder Hanging Wire Chandelier Lamp Holder Bulb Bas",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/newImages/Kennede Rechargeable Torch Household Portable Outdoor Flashlight.png",
    name: "Kennede Rechargeable Torch Household Portable Outdoor Flashlight",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/newImages/Hr Strong Non Leak Meko Gas Burner+ 4Way Extension.png",
    name: "Hr Strong Non Leak Meko Gas Burner+ 4Way Extension.png",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 590,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/newImages/4PCS-Black-Long -Allen-Key-Socket-Bit-Set-Screw-Driver-Tool-Kit-NEW.png",
    name: "4PCS-Black-Long -Allen-Key-Socket-Bit-Set-Screw-Driver-Tool-Kit-NEW",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 1300,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/newImages/8 Levers Shutter Lock.png",
    name: "8 Levers Shutter Lock.png",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/newImages/gemmy level 1 shaver.png",
    name: "Gemmy level 1 shaver",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2200,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/newImages/poltry_bulb.png",
    name: "poltry_bulb.png",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/newImages/HP Probook 640 645 650 655 G1 Big Pin Charger Complete With Cable.png",
    name: "HP Probook 640 645 650 655 G1 Big Pin Charger Complete With Cable.png",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 1500,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/newImages/Neelux 5W LED Energy Saving Bulb.png",
    name: "Neelux 5W LED Energy Saving Bulb.png",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 309,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/newImages/Primus Quality 6kg Gas Cylinder Burner For Meko.png",
    name: "Primus Quality 6kg Gas Cylinder Burner For Meko",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 600,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/newImages/Power King Heavy Duty 5 Way Extension Power Protector Switch.png",
    name: "Power King Heavy Duty 5 Way Extension Power Protector Switch.png",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 1090,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/newImages/twin_cable1.png",
    name: "Twin Cable",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 2747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/newImages/Viro Solid Brass Cylindrical Padlock 70mm.png",
    name: "Viro Solid Brass Cylindrical Padlock 70mm",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 1299,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/newImages/ailyoins_kettles1.png",
    name: "Allyon Kettle",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 1599,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/newImages/cerrotti_blow_dry.png",
    name: "Cerrotti Blow Dry",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];