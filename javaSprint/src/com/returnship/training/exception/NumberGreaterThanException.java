package com.returnship.training.exception;

// custom exception - all custom exes are 'checked' exes
public class NumberGreaterThanException extends Exception {
    private static final long serialVersionUID = 2442877278005497321L;

    public NumberGreaterThanException(String msg) {
        super(msg);
    }
}
