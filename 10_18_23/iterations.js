// for this one, the commented-out code is what one might do if they do not label the outer for loop

let iterations = 0;
// let breakOuter = false;

outer: for (let i = 0; i < 5; i ++) {

  for (let j = 0; j < 5; j ++) {
    iterations ++;
    if (i === 2 && j === 2) {
      // breakOuter = true;
      // break;
      break outer;
    }
  }

  // if (breakOuter) {
  //   break;
  // }
}
console.log('iterations: ', iterations);

// ==============================

for (let stars = '*'; stars.length < 6; stars += '*') {
  console.log(stars);
}

// OR

for (let i = 0; i < 1; i ++) {
  let stars = '';

  for (let j = 0; j < 5; j ++) {
    stars += '*';
    console.log(stars);
  }
}
