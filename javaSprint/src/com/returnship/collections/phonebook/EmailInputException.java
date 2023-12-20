package com.returnship.collections.phonebook;

public class EmailInputException extends AddContactException {

    private static final long serialVersionUID = 5460023628200779429L;

    public EmailInputException() {
         super();
    }

    public EmailInputException(String message) {
        super(message);
    }

}
