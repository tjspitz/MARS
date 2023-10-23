/*
  This is referred to as the PSEUDOCLASSICAL instantiation pattern
  It abstracts/hides several important JavaScript bits away from you,
    which is not a big deal unless you encounter some broken code
    and need to know what to fix or how to fix it
*/

// ignore this for now, go to the 'Manager' stuff, then come back...
function Employee(id, name) {
  this.id = id;
  this.name = name;
  this.location = 'Chicago';
};

Employee.prototype.transfer = function(newLoc) {
  let oldLoc = this.location;
  this.location = newLoc;
  console.log(`${this.name} is transferring from ${oldLoc} to ${newLoc}!`);
};

// START HERE... defining the class
function Manager(id, name, salary) {
  // It calls Object.create() for you, without you needing to think about doing so
    // or even knowing what Object.create() is or does

  // if 'Manager' is a sub-class of another object/class, you would need to know about
    // `Object.call(this)` --> so we'll pretend there is an 'Employee' class that is a 'superclass'
      // aka it is the source class, and 'Manager' derives properties from 'Employee'
  Employee.call(this);
  // perhaps Employee has a property such as this.id, this.name, this.location...
    // so now Manager will inherit these properties, even if they are not given below

  this.id = id;
  this.name = name;
  // this.location is inherited from Employee since I don't define it here
  this.salary = salary || 90000;

  // finally, it returns the new object without you needing to explicitly use the return keyword
};

/*
typically, methods are defined after the initial definition of your class...
  in every pattern except FUNCTIONAL
  essentially this 'afterwards' strategy is separating the concern of defining the class (above)...
    from the concern(s) of defining methods on the class (below)
and it, too, does some 'magic, invisible' JavaScript for you, specifically...
`Manager.prototype = {};` <-- everything in JS is an object (of some sort)...
  and you need your prototype to be one, too

the FIRST LINE BELOW is ONLY a big deal if your class is, again, a sub-class of another
  aka it is deriving things from another class
  you are copying all the methods from the make-believe 'Employee' class
  onto the 'Manager' sub-class
*/
Manager.prototype = Object.create(Employee.prototype);

// we also want to be sure that the constructor function property points to the CURRENT class...
  // not the superclass ('Employee') constructor by mistake
Manager.prototype.constructor = Manager;

// these are methods specific to 'Manager'
Manager.prototype.getDetails = function() {
  `${this.id}: ${this.name}`;
}
Manager.prototype.getRaise = function(amt) {
  this.salary = this.salary + amt;
}
// but Manager has inherited the .transfer() method from Employee, so it is accessible, too

// instantiate a new Manager named John...
let manager1 = new Manager(101, 'John');

console.log(manager1); // { name: 'John', id: 101, location: 'Chicago', salary: 90000 }
// ... because Employee sets this.location, and Manager has a fallback for this.salary

manager1.transfer('New York'); // 'John is transfering from Chicago to New York!'
console.log(manager1.location); // 'New York'
