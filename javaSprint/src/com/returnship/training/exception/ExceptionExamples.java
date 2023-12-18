package com.returnship.training.exception;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class ExceptionExamples {
    public static void examples() {
        /*
         * FileInputStream fis = new FileInputStream("data.txt"); // (1)
         *
         * int x = 0; int y = 5 / x; System.out.println("value of y is: " + y);
         * // (2), dividing by 0 int[] numbers = { 3, 5, 6, 9 }; for (int i = 0;
         * i <= numbers.length; i++) { System.out.println("Number: " +
         * numbers[i]); // (2), i=4 issue }
         */
        String str = show();
        System.out.println(str);

        FileInputStream anotherFis = null;

        try { // solve the exception probs
            anotherFis = new FileInputStream("data.txt");
            int a = 0;
            int b = 5 / a;
            System.out.println("value of x is: " + b);
            int[] moreNumbers = { 3, 5, 6, 9 };
            for (int i = 0; i <= moreNumbers.length; i++) {
                System.out.println("Number: " + moreNumbers[i]);
            }
            // 'Exception' is parent class of the following
        } catch (FileNotFoundException | ArithmeticException
                | NumberFormatException | ArrayIndexOutOfBoundsException e) {
            System.out.println("An Exception ocurred!");
            e.printStackTrace();
            // could also have multiple catch-es, if-else-s, etc...
        } finally { // execute irrespectice of Exceptions
            // release resources inside 'finally' block
            // e.g. close the FileInputStream, a Scanner, etc.
            try {
                anotherFis.close(); // closing FIS will throw its own exception
            } catch (IOException e) { // so we handle it
                System.out.println("Closed the file input stream...");
                e.printStackTrace();
            }
        }

        // throwing an exception manually, with a custom Exception class...
        try {
            int c = 20;
            if (c > 10) {
                throw new NumberGreaterThanException(
                        "Cannot be greater than 10!");
            }
        } catch (NumberGreaterThanException e) {
            System.out.println(
                    "Whoa, an error was thrown. Imagine that! Here's the error message: ");
            System.out.println(e.getMessage());
        }

    }

    // a method signature with 'throws' is delegating the error handling
    // to the method(s) which actually calls this method
    // 'if you call me, exceptions are your problem to handle'
    public static String show() throws ArithmeticException {
        int x = 0;
        int y = 5 / x;
        // won't hit below this line, 5 / 0 = exception
        System.out.println("Value of y is: " + y);
        return "This method throws some exception";
    }
}

//Any error condition that JE may not process
// 1) compile-time exception or checked exception
// 2) runtime exception or unchecked exception

//try, catch, finally, throw, throws
