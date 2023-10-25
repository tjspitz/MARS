const PRODUCTS = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

// here's a function that expects an array, and will return a new, modified array
    // but it modifies it in a very specific way
        // it's not flexible if we wanted to return a new array with some OTHER modifications
        // so it's .map()-like, but extremely limited
        // you could rewrite this to behave exactly like .map() though, if you wanted to
            // where it performs ANY modification that you specify at the time of invocation

let mapItemsSpecificWay = (items) => {
    // create a new array to return, so we don't affect the original
    const TRANSFORMED_ITEMS = [];

    for (let i = 0; i < items.length; i ++) {
        // store the current item in a variable so we can manipulate (mutate) it
        let currentItem = items[i];

        // give salePrice a value, in case there is no discount
        let sale = currentItem.original;

        if (currentItem.discount !== undefined) {
            // discount the price by the correct percentage
                // aka the difference between 100% and .discount's %
            sale = currentItem.original * (1  - currentItem.discount);
            sale = sale.toFixed(2); // returns the num to 2 decimal places AS STRING
            sale = Number(sale);
        }

        // set a new property on the currentItem
        currentItem.sale = sale;

        // do some math to both set a new property and give it the correct value
        currentItem.total = currentItem.stock * currentItem.sale;

        // push the finished, altered item into the result array
        TRANSFORMED_ITEMS.push(currentItem);
    }
    // it's a function, it's got to return the thing we made
    return TRANSFORMED_ITEMS;
}

let productDetails1 = mapItemsSpecificWay(PRODUCTS);

// .map essentially sets up a for loop for you,
    // abstracting away the need for quite a few lines of code
// the callback can accept not only each element, but also each index,
    // and actually additional things, but el and idx are the most commonly used
    // of course, you can name el and idx anything you want,
        // but they refer to the current element and the current index

let productDetails2 = PRODUCTS.map((el, i) => {
    // doing the sale price thing, but in one line...
    let sale = Number((el.original * (1 - el.discount)).toFixed(2)) || el.original;
    let total = el.stock * sale;

    // just logging things to prove how .map does its business
    console.log('\nthe current element, from the original array, is: ', el);
    console.log('\nthe current element\'s index in the original array is: ', i);

    // .map expects to put an element in the new array that reflects some sort of change...
        // to the original array's corresponding element...
            // in a way, 'pushing' into the new array...
            // but syntactically, it RETURNs the new, modified element to the new array

    // there are more concise ways to do it, but this shows it kind of step-by-step
    let modifiedItem = {};

    // these are all the same as original
    modifiedItem.item = el.item;
    modifiedItem.stock = el.stock;
    modifiedItem.original = el.original;

    // these are not all the same as original
    if (el.discount !== undefined) {
        modifiedItem.discount = el.discount;
    }

    modifiedItem.sale = sale; // no sale property in original, we made it up above
    modifiedItem.total = total; // same as sale

    return modifiedItem;

    // p.s. UNLIKE in a for loop, you can NOT skip over elements via 'continue'
    // .map, .forEach, and other Array methods VISIT EVERY element
});

console.log(productDetails1);
console.log('==========\nwill there be the same result...?\n==========');
console.log(productDetails2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map