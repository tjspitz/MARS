// HINT: uncomment one section (between the ===== WORDS ==== breaks)
  // then run the code, see the results
  // then comment it back out, and do the next section

// ================== ORIGINAL ========================
function calcSales() {
  const sales = [
      { item: "PS4 Pro", stock: 3, original: 399.99 },
      { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
      { item: "Nintendo Switch", stock: 4, original: 299.99 },
      { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
      { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 }
  ];

  console.log('sales before: ', sales)

  sales.forEach(sale => {
      const { original, discount = 0.0, stock } = sale;
      sale["sale"] = original - discount * original;
      sale["total"] = original * stock - original * stock * discount;
  });
  console.log('sales after: ', sales);
  console.log('=========\nthe original sales data is lost');
}

calcSales();

// ========= MOVING 'SALES' OUTSIDE THE FUNCTION =============
// function calcSales(sales) {

//   sales.forEach(sale => {
//       const { original, discount = 0.0, stock } = sale;
//       sale["sale"] = original - discount * original;
//       sale["total"] = original * stock - original * stock * discount;
//   });

// console.log('array of mutated items is: ', sales);
// }

// const products = [
//   { item: "PS4 Pro", stock: 3, original: 399.99 },
//   { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
//   { item: "Nintendo Switch", stock: 4, original: 299.99 },
//   { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
//   { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 }
// ];
// calcSales(products);
// console.log('but products has been changed, too: ', products);
// console.log('if this were a larger application and "products" was coming from an API call, its original value would be lost');

// ============= USING .MAP() BUT IMPROPERLY ===============
// function calcSales(sales) {

//   return sales.map(sale => {
//       const { original, discount = 0.0, stock } = sale;
//       // setting INPUT OBJ'S PROPERTIES instead of making a new obj
//       sale["sale"] = original - discount * original;
//       sale["total"] = original * stock - original * stock * discount;
//       return sale;
//   });
// }

// const products = [
//   { item: "PS4 Pro", stock: 3, original: 399.99 },
//   { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
//   { item: "Nintendo Switch", stock: 4, original: 299.99 },
//   { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
//   { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 }
// ];

// console.log('new array of mutated items is: ', calcSales(products));
// console.log('but products is still changed because you are modifying each input array\'s object in your .map() code: ', products);

// ============== USING MAP PROPERLY =====================
// function calcSales(sales) {

//   return sales.map(sale => {
//       const { item, stock, original, discount = 0.0 } = sale;
//       // NOTE THAT THE SPREAD (...) OPERATOR
//         // COULD REALLY CONDENSE THE NEXT 4 LINES
//       // create a NEW OBJ to then set MODIFIED PROPERTIES
//       const modifiedSale = {};
//       modifiedSale.item = item;
//       modifiedSale.stock = stock;
//       modifiedSale.original = original;
//       modifiedSale.sale = original - discount * original;
//       modifiedSale.total = original * stock - original * stock * discount;

//       return modifiedSale;
//   });
// }

// const products = [
//   { item: "PS4 Pro", stock: 3, original: 399.99 },
//   { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
//   { item: "Nintendo Switch", stock: 4, original: 299.99 },
//   { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
//   { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 }
// ];

// console.log('new array of mutated items is: ', calcSales(products));
// console.log('now products is unchanged, since we have implemented .map() to return a new array with new, modified items,');
// console.log('rather than modifying the input array\'s contents directly: ', products);
