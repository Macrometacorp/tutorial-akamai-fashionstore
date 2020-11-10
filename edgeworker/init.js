const TEST = "testing 123";
export { TEST };

const COLLECTIONS = [
  {
    name: "FashionItemsTable",
    data: [
      {
        _key: "f1",
        category: "Bags",
        name: "Safari ARC Polyester 55 cms Black Travel Duffle (ARC55RLBLK)",
        price: 14.85,
        rating: 3.9
      },
      {
        _key: "f2",
        category: "Bags",
        name: "INLANDER 75 Ltrs 80 cms Rucksack",
        price: 15.85,
        rating: 4.5
      },
      {
        _key: "f3",
        category: "Bags",
        name: "Chris & Kate 45 Ltrs 28 cms Men & Women Rucksacks",
        price: 17.58,
        rating: 3.7
      },
      {
        _key: "f4",
        category: "Bags",
        name: "The Clownfish Regal Sling Bag, Sling Bag for Travel, Sling Bag for Men,Sling Bag for Women, Side Bag for Girls, Side Bag for Men, Messenger Bag, Tablet Bag (Chocolate) (TCFSLFL-ICHO3)",
        price: 8.57,
        rating: 4.2
      },
      {
        _key: "f5",
        category: "Bags",
        name: "POLESTAR XPLORE 55 ltrs with Rain Cover Rucksack Hiking Backpack",
        price: 19.46,
        rating: 4
      },
      {
        _key: "f6",
        category: "Designer",
        name: "Ecosunny Women's Deep V Neck Short Sleeve Floral Lace Bridesmaid Maxi Dress Party Gown",
        price: 44.99,
        rating: 3.7
      },
      {
        _key: "f7",
        category: "Designer",
        name: "Miss Chase Women's Black Designer Cap Sleeves Pearl Detailing Lace Skater Mini Dress",
        price: 20.99,
        rating: 4
      },
      {
        _key: "f8",
        category: "Designer",
        name: "TORARY Womens Long Sleeves Peter Pan Collar Aline Fit and Flare Wednesday Addam Dresses",
        price: 26.99,
        rating: 4.6
      },
      {
        _key: "f9",
        category: "Designer",
        name: "Illi London Women's Knee Length Dress.",
        price: 24.99,
        rating: 4
      },
      {
        _key: "f10",
        category: "Designer",
        name: "NNJXD Girl Dress Kids Ruffles Lace Party Wedding Dresses",
        price: 22.99,
        rating: 4.4
      },
      {
        _key: "f11",
        category: "Homewear",
        name: "VIMAL JONNEY Women's Regular Fit Cotton Short for Gym and Home Wear-N8_Anthra_01",
        price: 6.07,
        rating: 4
      },
      {
        _key: "f12",
        category: "Homewear",
        name: "Amazon Brand - Eden & Ivy Women's Pyjama Top",
        price: 17.29,
        rating: 4.3
      },
      {
        _key: "f13",
        category: "Homewear",
        name: "Chromozome Men's Plain Regular Fit T-Shirt (Pack Of 3)",
        price: 13.49,
        rating: 4
      },
      {
        _key: "f14",
        category: "Homewear",
        name: "Kuchipoo Girl's T-Shirt (Pack of 5)",
        price: 8.50,
        rating: 4.3
      },
      {
        _key: "f15",
        category: "Homewear",
        name: "minicult Cotton Baby Pajama Pants Unisex with Rib (Pack of 6) (Assorted Multicolor Prints) (4-5 Years, Multi Color)",
        price: 18.10,
        rating: 3.3
      },
      {
        _key: "f16",
        category: "Kids",
        name: "GHPC Boy's T-shirt",
        price: 5.23,
        rating: 3
      },
      {
        _key: "f17",
        category: "Kids",
        name: "More & More Men's & Women's Cotton Hooded Hoodie",
        price: 10.81,
        rating: 4
      },
      {
        _key: "f18",
        category: "Kids",
        name: "Lion King Boy's Regular fit T-Shirt",
        price: 8.11,
        rating: 4.2
      },
      {
        _key: "f19",
        category: "Kids",
        name: "wear your mind Boys' T-Shirt",
        price: 15.40,
        rating: 3.7
      },
      {
        _key: "f20",
        category: "Kids",
        name: "GHPC Boys' T-Shirt",
        price: 18.10,
        rating: 4.1
      },
      {
        _key: "f21",
        category: "Men",
        name: "Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirts",
        price: 28.11,
        rating: 4.2
      },
      {
        _key: "f22",
        category: "Men",
        name: "Tryme Fashion Men's Regular Fit Casual Shirt",
        price: 15.99,
        rating: 4
      },
      {
        _key: "f23",
        category: "Men",
        name: "LEVIZO Cotton Checkered Casual Classic Regular Fit Full Sleeves Shirt for Men",
        price: 7.7,
        rating: 4.1
      },
      {
        _key: "f24",
        category: "Men",
        name: "Dennis Lingo Men's Casual Shirt",
        price: 17.43,
        rating: 3.8
      },
      {
        _key: "f25",
        category: "Men",
        name: "GRITSTONES Men's Regular Fit Shirt",
        price: 14.40,
        rating: 3.7
      },
      {
        _key: "f26",
        category: "Sportswear",
        name: "TRUEREVO Men's Ultra Light Dryfit Pullover Jacket",
        price: 29.99,
        rating: 4
      },
      {
        _key: "f27",
        category: "Sportswear",
        name: "Sportyway Unisex Kids Argentina Football Jersey Set",
        price: 16.99,
        rating: 4
      },
      {
        _key: "f28",
        category: "Sportswear",
        name: "Ap'pulse Women's 1/4 Zip Slimfit Raglan Sleeve Tshirt",
        price: 16.99,
        rating: 4.1
      },
      {
        _key: "f29",
        category: "Sportswear",
        name: "Fitg18® Gym wear Leggings Ankle Length Free Size Combo Workout Trousers | Stretchable Striped Jeggings | Yoga Track Pants for Girls & Women (Pack of 2-Free Size 28-34 Inch)",
        price: 22.99,
        rating: 3.8
      },
      {
        _key: "f30",
        category: "Sportswear",
        name: "Just Care Men's Slim Fit Sports Wear T-Shirt",
        price: 8.99,
        rating: 3.5
      },
      {
        _key: "f31",
        category: "Women",
        name: "Femninora Women's Formal Shirt",
        price: 18.10,
        rating: 3.4
      },
      {
        _key: "f32",
        category: "Women",
        name: "Marks & Spencer Women's Regular Fit Shirt",
        price: 29.46,
        rating: 5
      },
      {
        _key: "f33",
        category: "Women",
        name: "FurryFlair Women's Shirt",
        price: 13.11,
        rating: 3.5
      },
      {
        _key: "f34",
        category: "Women",
        name: "FUNDAY FASHION Women's Formal Shirt",
        price: 23.78,
        rating: 3.4
      },
      {
        _key: "f35",
        category: "Women",
        name: "MIZAGO Women's Tops",
        price: 26.32,
        rating: 3.9
      }
    ],
  },
  {
    name: "OrdersTable",
    data: [
      {
        fashionItems: [
          {
            _id: "FashionItemsTable/f31",
            _key: "f31",
            _rev: "_bR90GHu--C",
            category: "Women",
            name: "Femninora Women's Formal Shirt",
            price: 18.10,
            rating: 3.4
          },
          {
            _id: "FashionItemsTable/f35",
            _key: "f35",
            _rev: "_bR90GHy--_",
            category: "Women",
            name: "MIZAGO Women's Tops",
            price: 26.32,
            rating: 3.9
          },
        ],
        customerId: "56b83d81-940a-4dd4-c2f4-420c41deeca7",
        orderDate: 1603105787506,
        _key: "1603105787506:56b83d81-940a-4dd4-c2f4-420c41deeca7",
      },
    ],
  },
  {
    name: "CartTable",
    data: [],
  },
  {
    name: "UsersTable",
    data: [
      {
        customerId: "56b83d81-940a-4dd4-c2f4-420c41deeca7",
        password: "�y|�\u0018�-�d�\u0007�]?�v#\u0004�\u0006=S,�\\^ר�O",
        _key: "john.d@macrometa.io",
      },
      {
        customerId: "56b83d81-512a-4dd4-c2f4-310c41deeca7",
        password: "�y|�\u0018�-�d�\u0007�]?�v#\u0004�\u0006=S,�\\^ר�O",
        _key: "harry.d@macrometa.io",
      },
    ],
  },
  {
    name: "BestsellersTable",
    data: [
      { _key: "f32", quantity: 1 },
      { _key: "f9", quantity: 1 },
      { _key: "f26", quantity: 1 },
      { _key: "f24", quantity: 1 },
      { _key: "f17", quantity: 1 },
    ],
  },
];

const EDGE_COLLECTIONS = [
  {
    name: "friend",
    data: [
      {
        _from: "UsersTable/harry.d@macrometa.io",
        _to: "UsersTable/john.d@macrometa.io",
      },
    ],
  },
  {
    name: "purchased",
    data: [
      {
        _from: "UsersTable/john.d@macrometa.io",
        _to: "FashionItemsTable/f17",
      },
      {
        _from: "UsersTable/john.d@macrometa.io",
        _to: "FashionItemsTable/f9",
      },
    ],
  },
];

const GRAPHS = [
  {
    name: "UserSocialGraph",
    properties: {
      edgeDefinitions: [
        {
          collection: "friend",
          from: ["UsersTable"],
          to: ["UsersTable"],
        },
        {
          collection: "purchased",
          from: ["UsersTable"],
          to: ["FashionItemsTable"],
        },
      ],
      orphanCollections: [],
    },
  },
];

const VIEWS = [
  {
    name: "findFashionItems",
    properties: {
      links: {
        FashionItemsTable: {
          analyzers: ["text_en"],
          fields: {},
          includeAllFields: true,
          storeValues: "none",
          trackListPositions: false,
        },
      },
    },
  },
];

// men: "Men",
// women: "Women",
// kids: "Kids",
// bags: "Bags",
// home: "Homewear",
// sports: "Sportswear",
// designers: "Designers",

// // COLLECTIONS
// FashionItemsTable
// OrdersTable
// CartTable
// BestsellersTable

// // EDGE_COLLECTIONS
// friend
// purchased

// // kvCollections
// ImagesKVTable

// // GRAPHS
// UserSocialGraph

// // VIEWS
// findFashionItems

// // Stream App
// UpdateBestseller
