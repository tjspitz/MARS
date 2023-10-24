/*
Consider array of objects as below:
const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

You will pass this array to a function and the function should return something like this:
[
  {
    Item:’PS4 Pro’,
    Stock: 3,
    Original: 399.99,
    Sale: 399.99,
    Total: 1199.97
  },
  {
    Item: 'Xbox One X',
    Stock: 1,
    Original: 499.99,
    Discount:0.1,
    Sale: 449.98,
    Total: 449.98
  }
]
*/

/* NOTES:
  'stock' should be thought of as 'qty'
  'original' is original price
  'discount' is a percentage
  'sale' should reflect original * (1 - discount)
  'total' is stock * sale
*/

const SALES = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 },
];

// just passing it to .map() but is not passing it to a (wrapper) function
// SALES.map((product) => {
//   const { item, stock, original, discount } = product;
//   let sale = Number((original * (1 - discount)).toFixed(2)) || original;
//   let total = stock * sale;
//   return {
//     item,
//     stock,
//     original,
//     sale,
//     total,
//   };
// });

// storing this specific case to a variable (as a function)
const MOD_SALES = (sales) => {
  return sales.map((product) => {
    const { item, stock, original, discount } = product;
    let sale = Number((original * (1 - discount)).toFixed(2)) || original;
    let total = stock * sale;
    return {
      item,
      stock,
      original,
      sale,
      total,
    };
  });
};

console.log('modified sales info is: ', MOD_SALES(SALES));
