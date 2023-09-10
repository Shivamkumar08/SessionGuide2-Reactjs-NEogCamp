// ex01: making an API call - async js revision
// Use this URL - https://example.com/api/products to make a fake fetch call and list out all the items as an ordered list on the DOM. A fake fetch has been provided.
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { name: "Pen", price: 30, quantity: 100 },
              { name: "Pencil", price: 50, quantity: 50 },
              { name: "Paper", price: 20, quantity: 30 }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

export const Question1 = () => {
  const getData = () => {
    fakeFetch("https://example.com/api/products")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        data.products.map(({ name, price, quantity }) => {
          console.log(`${name} -- INR ${price}--${quantity}`);
        });
      });
  };
  getData();
  return <></>;
};
