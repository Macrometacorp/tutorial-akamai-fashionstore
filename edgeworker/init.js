const TEST = "testing 123";
export { TEST };

const COLLECTIONS = [
  {
    name: "FashionItemsTable",
    data: [
      {
        category: "Men",
        _key: "f1",
        name:
          "Hanes Men’s Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt",
        price: 12.95,
        rating: 4.6,
      },
    ],
  },
  {
    name: "OrdersTable",
    data: [],
  },
  {
    name: "CartTable",
    data: [],
  },
  {
    name: "UsersTable",
    data: [],
  },
  {
    name: "BestsellersTable",
    data: [],
  },
];

const EDGE_COLLECTIONS = [
  {
    name: "friend",
    data: [],
  },
  {
    name: "purchased",
    data: [],
  },
];

const KV_COLLECTIONS = [
  {
    name: "ImagesKVTable",
    data: [
      {
        key: "f1",
        value:
          "data:image/jpeg;base64,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",
      },
    ],
  },
];

const GRAPHS = [
  {
    name: "UserSocialGraph",
  },
];

const VIEWS = [
  {
    name: "findFashionItems",
    properties: {
      links: {
        "FashionItemsTable": {
          "analyzers": ["text_en"],
          "fields": {},
          "includeAllFields": true,
          "storeValues": "none",
          "trackListPositions": false,
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
