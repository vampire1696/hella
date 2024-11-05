const { default: wc } = require("./woocommerce");

//Dont have products slug = test,result = {}
test("getProduct return correct data", async () => {
  const response = await wc.getProductBySlug("test");
  expect(response).toEqual({});
});

test("getDeliFormat return correct Array", async () => {
  const response = await wc.getDeliFormatTerm();
  expect(response).toEqual([
    {
      id: 547,
      name: "E-Learning",
      slug: "e-learning",
      description: "",
      menu_order: 0,
      count: 135,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms/547",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms",
          },
        ],
      },
    },
    {
      id: 772,
      name: "Guideline",
      slug: "guideline",
      description: "",
      menu_order: 0,
      count: 21,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms/772",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms",
          },
        ],
      },
    },
    {
      id: 770,
      name: "Knowledge-Base",
      slug: "knowledge-base",
      description: "",
      menu_order: 0,
      count: 10,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms/770",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms",
          },
        ],
      },
    },
    {
      id: 557,
      name: "Training",
      slug: "training",
      description: "",
      menu_order: 0,
      count: 89,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms/557",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms",
          },
        ],
      },
    },
    {
      id: 696,
      name: "Video",
      slug: "video",
      description: "",
      menu_order: 0,
      count: 58,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms/696",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/attributes/5/terms",
          },
        ],
      },
    },
  ]);
});
