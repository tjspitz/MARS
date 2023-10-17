/* These are all valid function declarations:

  function thisIsAFunction() {
    // code that does things & stuff
  }

  const thisIsAFunction = function() {
    // code that does things & stuff
  };

  const thisIsAFunction = () => {
    // code that does things & stuff
  };

  But none of the above will call/invoke/execute the function they are defining.
  The first example DOES however behave slightly differently than the following two,
    in ways that don't affect HOW your function runs, or HOW you call/invoke it,
    but in precisely WHEN it is called, under certain circumstances,
    which has to do with a concept called 'hoisting'.

  thisIsAFunction <-- the name of the declared function
  thisIsAFunction() <-- actually calling/invoking/executing the declared function

  Keep in mind that var, let, and const can all be used, but they have different intents
    and/or behaviors depending on their intended (or unintended) use-case,
    scope, execution context, module, etc.

    var: can be re-declared as well as re-assigned, regardless of scope
    let: can NOT be re-declared in same scope, but can be reassigned
    const: can NOT be re-declared, can NOT be re-assigned, also MUST be initialized with a value
      aka "const thisIsAVariable" will break, must be "const thisIsAVariable = <something>"
*/
var thisIsFine;
var thisIsFine = true;
var thisIsFine = [true, true];
thisIsFine = { true: true };

let isThisFine;
let isThisFine = false; // will break (re-declaration)
isThisFine = true;

const differentScope = () => {
  let isThisFine = true; // will NOT break (in a different scope)
};

const whatAboutThis; // will break (not initialized to a value)
const whatAboutThis = true;
const whatAboutThis = false; // will break (re-declaration)
whatAboutThis = false; // will break (re-assignment)

const justOneFunc = () => {
  console.log('Hello from a simple function!');
};

const funcAnotherFunc = () => {
  console.log('Hello from an outer function!');

  return () => {
    console.log('Hello from an inner function!');
  };
};

const referenceFAF = funcAnotherFunc; // we can call 'funcAnotherFunc' with 2 different names now
const callFAF = funcAnotherFunc(); // actually logs outer func's message since the func is being called
  // ...even though we're trying to store a value in a variable
  // the () of funcAnotherFunc() invokes the behavior of the function regardless of our intent

justOneFunc(); // logs the simple func message
referenceFAF(); // will log the outer func's message
callFAF(); // will log the inner func's message
funcAnotherFunc()(); // calls the outer as well as inner func... logs both

/*
  Only ONE of the 3 functions actually RETURNS something - console.log is a 'side effect'.
  Line 58 is returning an ANONYMOUS function, aka it has no name, is not stored in a variable,
    but it can still be accessed/invoked since "funcAnotherFunc"'s return value.
    IS this inner, anonymous function:
      funcAnotherFunc() --> logs the outer message to the console and returns an anonymous function.
        The anonymous function is just 'floating' there, it hasn't been called.
      funcAnotherFunc()() --> calling funcAnotherFunc AND calling its return value,
        which is itself a function.
        This works since funcAnotherFunc returns another function.
        This would not work if funcAnotherFunc returned a string, number, boolean, etc.
          since they are not functions... only functions are callable.
*/