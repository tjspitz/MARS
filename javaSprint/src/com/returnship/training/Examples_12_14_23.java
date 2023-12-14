package com.returnship.training;

public class Examples_12_14_23 {
    public static final String message = "There's nothing in here. Check the comments!";

// Access specifiers
    // public - visible to "outside" e.g. other classes within same pkg
    // private - visible only to the containing class
    // public/private methods yes
    // private class no
    // protected - visible within the pkg, and to SUBlcasses in diff pkg
    // default - visible only within same pkg
// "final" keyword - constant (cannot be changed by others)
    // use w/ classes, methods, or variables
// "static" keyword
    // class - part of class, no Object required for access
    // method - can utilize via the class w/o a new instance of class every time
    // block - { contents within are run/utilized FIRST (before `main`) }
    // like pre-initializations
// "abstract" keyword - see OOP principles, below

/*
 * OOP principles
 * * encapsulation - binding data and methods (aka class behavior)
 * * inheritance - inheriting properties & methods from parent class
 * * * * "is-a" relationship
 * * * * association - "has-a"
 * * * * * * the Employee class 'has-a' laptop from the Laptop class
 * * * * will not inherit private methods, vars, etc
 * * * * will inherit public things
 * * * * child constructor is only called AFTER parent constructor has called
 * * * * * * `super()` is implicit, but `super(arg, arg, arg)` is not
 * * * * w/ @Overrides, can widen visibility but can not narrow
 * * * * * * private => public yes, public => private no
 * * polymorphism - static or dynamic
 * * * * dynamic is always via @Overrides
 * * abstraction - hiding of the implementation details
 * * * * via abstract class
 * * * * * * must contain at least 1 abstract (declaration only) method
 * * * * via interfaces
 * */

// Interfaces
    // all the methods in an interface will be public, and abstract
        // w/o need for keywords
    // no real use for variables
        // other than constants (public static final <type> NAME)
    // a class IMPLEMENTS an interface
        // a class can implement interface(s) AND extend superclass
        // a class can NOT extend multiple superclasses
}
