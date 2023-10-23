/*
  This is referred to as the PSEUDOCLASSICAL instantiation pattern
  It abstracts/hides several important JavaScript bits away from you,
    which is not a big deal unless you encounter some broken code
    and need to know what to fix or how to fix it
*/

// defining the class
const Manager = (id, name) => {
  // It calls Object.create() for you, without you needing to think about doing so
    // or even knowing what Object.create() is or does

  // If 'Manager' is a sub-class of another object/class, you would need to know about
    // `Object.call(this)` --> so we'll pretend there is an 'Employee' class that is a 'superclass'
    // aka it is the source class, and 'Manager' derives properties from 'Employee'
  Employee.call(this)

  this.id,
  this.name,
  // it returns the new object without you needing to explicitly use the return keyword
};

/*
typically, methods are defined after the initial definition of your class...
  in every pattern except FUNCTIONAL
  essentially this 'afterwards' stratgey is separating the concern of defining the class (above)...
    from the concern(s) of defining methods on the class (below)
and it, too, does some 'magic, invisible' JavaScript for you, specifically...
Manager.prototype = {};
  Why? Everything in JS is an object (of some sort), and you need your prototype to be one, too
the FIRST LINE BELOW is ONLY a big deal if your class is, again, a sub-class of another
  aka it is deriving things from another class
  you are copying all the methods from the make-believe 'Employee' class
  onto the 'Manager' sub-class
*/
Manager.prototype = Object.create(Employee.prototype);

// these are methods specific to 'Manager'
Manager.prototype.getDetails = () => `${this.id}: ${this.name}`;

let manager1 = new Manager(101, 'John');
