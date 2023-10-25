// =========== NOODLING WITH CLASSES ===========
// let's make a class that will handle all employees...
  // to 'build' an employee, let's expect a first name and a last name
class Employee {
  // constructor is a function that runs, and a function has parameters
    // you pass arguments in when you call the function
    constructor(first, last) {
      // 'this' refers to the object that calls the function
        // aka Person... Person calls the constructor function
        this.firstName = first;
        this.lastName = last;
    }
    // you can add methods to your Person object
      // methods are just functions that are accessed as properties on an object
      // so... 'saveRecord()' is a method (function) that is set on Person as a property
      saveRecord() {
        // write some code to save this Person object to localStorage, a database, etc.
        console.log(`You have saved ${this.firstName} ${this.lastName} to the database!`);

        // 'this'.firstName - 'this' refers to the calling object
          // THIS particular Person object, at key name 'firstName', access the value held there
      }
}

// what if there are different types of employees?
  // they should all have names, but rewriting that code is redundant
  // they should also have a method that saves their info
  // so let's inherit all that from a SUPERclass, aka Employee
  // and perhaps add some additional, specific info to each SUBclass

// "I want a Manager class that delegates to the Employee class.."
class Manager extends Employee {
  // my constructor still needs to accept name arguments
    // and some more specifics...
  constructor(first, last, role, hours) {
    // but I will construct their name details via code I wrote for Employee class
    super(first, last) // <--- bounces up to Employee before going to next line
    this.role = role; // <--- Employee does not have this, Manager does
    this.hours = hours; // <--- same as above
  }
  // do I need to define a saveRecord() method?
    // no, because if I call Manager.saveRecord()...
      // it looks on the Manager object...
        // finds nothing...
          // and falls back (DELEGATES) to its super (parent) class
  // so only define new, unique methods to this child class if you need to
}

// ALL OF THE FOLLOWING WILL CALL CONSTRUCTOR FUNCTIONS
// THEREFORE 'this' IS BOUND TO THE CALLING OBJECT
  // WHICH WOULD BE ANONYMOUS, EXCEPT WE'RE POINTING TO EACH WITH A VARIABLE

// instantiate a new, distinct object in the Employee class
  // pass in the values I want for first name and last name
let genericEmployee1 = new Employee('George', 'Genericman');
// so now the object referenced by 'genericEmployee1' has its own 'this'...
  // this.firstName, this.lastName, this.saveRecord(), and any other property that is set on this Employee-class object

// instantiate a new, distinct object in the Employee class
  // pass in variables which point to the vales I want for the name
let firstName = 'Bob';
let lastName = 'Boringman';
let role = 'Manager';
let hours = 80;

let genericEmployee2 = new Employee(firstName, lastName);

// instantiate a new, distinct object in the Manager class
  // pass in variables that will give her a name
    // omit values that would give her a role or hours
      // (making a mistake on purpose)
firstName = 'Lisa';
lastName = 'Linkerson';

let specificManager1 = new Manager(firstName, lastName);

// instantiate a new, distinct object in the Manager class
  // pass in all variables that give her all properly defined properties

  firstName = 'Olga';
  lastName = 'Olgerson';

  let specificManager2 = new Manager(firstName, lastName, role, hours);


// =========== IN-CLASS EXERCISE ===========
class Account {
  constructor(checking) {
    this.checking = checking;
  }
  showBalance() {
    console.log('my checking balance is: ', this.checking);
    console.log('after all these logs, you will see an `undefined` in nodemon...');
    console.log('because this method has no return value');
    console.log('these logs are called side effects, they are not return values');
  }
}

class SavingsAcount extends Account {
  constructor(checking, savings, interest) {
    super(checking)
    this.savings = savings;
    this.interestRate = interest;
  }
  calcNet() {
    return this.checking + this.savings;
  }
  calcTotal() {
    return this.calcNet() * (1 + this.interestRate);
  }
}

let mySavings = new SavingsAcount(100, 200, 0.1); // 100 = checking, 200 = savings, 0.1 = interest rate % (decimal)

console.log(mySavings.showBalance()); // delegates to Account method
console.log('\nmy total savings: ', mySavings.calcTotal()); // calls SavingsAccount method
