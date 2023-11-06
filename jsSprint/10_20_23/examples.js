/*
  Feel free to run any of this code
  Just comment out the code you do not wish to run...
  Especially since some of the code are examples of BROKEN code!
    hint: lines 57, and 141-153
  ...just highlight everything you do NOT want to run, and press 'cmd' and  '/' on a Mac
  (same thing to un-comment things)
*/

// ========== basic callback example ==========

// you can call this whenever you want, no issues
function greet() {
  console.log('Good evening!');
}

/*
  you COULD call this function whenever, and it would log something...
  but if you do not pass some kind of function as your 'input'
  then when this function hits 'input()' it will break
*/
function processGreet(input) {
  console.log('Processing greeting...');
  input()
}

/*
  you are calling one function, which expects another function as an arg...
  and now it's all good because processGreet will log something
  then it will call the arg you provided, which itself is a function that logs something
*/
processGreet(greet)

// ========== callback via setTimeout ==========

/*
  setTimeout is a built-in function, you don't need to define it
  setTimeout will CALL the provided function (or callback)...
  ... AFTER the given duration (in milliseconds) has passed
*/

// anonymous function provided within setTimeout
setTimeout(function() {
  console.log('Hello after 1 second!');
}, 1000);

// named function
const message = function() {
  console.log('Hello after some waiting time...');
}

// named function provided as a callback to setTimout
setTimeout(message, 1000)

// passing a named, called function is a BAD IDEA
  // this will NOT behave as expected, see add example for details
setTimeout(message(), 1000);

// the add example
let add = function(a, b) {
  return a + b;
}

// this will NOT work, you are providing a CALLED function
  // setTimeout is mad because it received the RESULT of calling 'add'
  // setTimeout wants to receive a function which IT WILL CALL
setTimeout(add(10, 30), 2000)

/*
  this WILL work, as you are providing an anonymous function...
  which executes the code you really care about
    setTimeout says "oh, after 2000 milliseconds, I will call this outer function..."
    "... and I don't even care what is inside of it because I'm just doing my job!"
      but the result is after 2000 ms, a function is called...
      and it logs (in this case) the RESULT OF CALLING your add function,
        which of course returns the value that your add function produces
          ...so you get '40' after 2 seconds
*/
setTimeout(function() {
  console.log( add(10, 30) );
}, 2000)

// looks similar, but you won't see much
  // the outer function is calling 'add' but that result is neither logged nor returned
  // it's just... floating there... sad and lonely...
setTimeout(function() {
  add(10, 30)
}, 2000)

/*
  fun fact: setTimeout has its own return value,
    which is important in that if you experiment with the code above...
      you might find a seemingly random number returned...
        BEFORE the result of your wrapped function
  that particular number is the weird, mostly-meaningless return value of setTimeout
*/

// ========== IIFE ==========

// putting ( ) around the entire, anonymous function
  // means it will be called as soon as the interpreter reads that code

// not an IIFE, will be read/defined but not called yet
let normalFunc = function() {
  console.log('Hello from a normal function!');
};


// an IIFE it is called as soon as it is read by the interpreter
  // so there's really no point in naming an IIFE
(function() {
  console.log('Hello from an IIFE!');
})(); // don't forget the () at the end...

// calling the normal function...
normalFunc()

// so, which log will appear first.....?

// ========== arrow functions ==========

/*
  they just shorten the things you type to define a function
    but they also have some unusual limitations involving 'this'
    so make sure you know 'this' in JS before you use an arrow function
      that contains the keyword 'this' within it
*/
// traditional function
let traditionalFunc = function() {
  console.log('Hello, I am a function');
};

// arrow function, behaves exactly the same
let arrowFunc = () => {
  console.log('Hello, I am an arrow function');
};

// arrow function: no 'function' keyword
  // MUST have '=>' between the () and the { }

// examples of bad mix-and-match that do not work:
let badFunc1 = function() => {
  console.log('Will not even execute, this is not a function');
  // remove the "=>" for a traditional function
};

let badFunc2 = () {
  console.log('Will not even execute, this is not a function');
  // needs to be () => { } for it to be an arrow function
};

let badIIFE1 = (function() => { })(); // not a function
let badIIFE2 = (() { })(); // not a function

// ========== providing callbacks of many flavors ==========
const nums = [1, 2, 3, 4];

let callback1 = function(num) {
  return num * num;
};

let callback2 = (num) => {
  return num * num;
};

// named callbacks
let result1 = nums.map(callback1); // [2, 4, 9, 16]
let result2 = nums.map(callback2); // [2, 4, 9, 16]

// anonymous functions/callbacks
let result3 = nums.map(function(num) {
  return num * num;
}); // [2, 4, 9, 16]

// with arrow functions, IF you are RETURNING a value
  // AND you only need 1 line of code
  // THEN and only then you can abbreviate it like this:
let result4 = nums.map((num) => num * num); // [2, 4, 9, 16]

/*
  this works due to the 'only 1 param' rule, but consistency
    with how you write your code is, in my opinion, better
      than leaving out the ( ) just because you can
    furthermore, the ( ) are REQUIRED for 2 or more params AS WELL AS 0 params
      so why confuse yourself or others by writing code
      in differing ways
*/
let result6 = nums.map(num => num * num); // [2, 4, 9, 16]

// otherwise, follow the typical pattern...
let result5 = nums.map((num) => {
  // some more code...
  // some more code...
  return num * num;
});
