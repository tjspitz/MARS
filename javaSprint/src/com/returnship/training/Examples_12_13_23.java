package com.returnship.training;

public class Examples_12_13_23 {
    public static void examples() {
        equality();
        arrays();
    }

    private static void equality() {
        Employee.companyName = "MARS";
        Employee emp1 = new Employee(101, "Bob", (byte) 32);

        System.out.println(emp1.getDetails());

        // EQUALITY (and such)
        String str1 = "MyString";
        String str2 = "MyString";
        String str3 = new String("MyString");
        String str4 = new String("MyString");
        System.out.println(str1 == str2); // true
        System.out.println(str3 == str4); // false (Objects equality)

        // compare the CONTENT only
            // but the content still must both be strings
            // no type coercion
        System.out.println(str1.equals(str2)); // true
        System.out.println(str3.equals(str4)); // true

        Employee emp2 = new Employee(101, "Bob", (byte) 32);

        // different instances (objects): false
        System.out.println("Are emp1 and emp2 the same? " + (emp1 == emp2));
        // with Employee hashCode() and equals() overriden: true
        System.out.println("Are emp1 and emp2 'equal'? " + (emp1.equals(emp2)));
        // being stubborn with the == operator, with hashCode() still overridden
        System.out.println(
                "Are emp1 and emp2 the same based on their (forced) hashCode? " +
                (emp1.hashCode() == emp2.hashCode())
        );
    }

    private static void arrays() {
        int[] numbers = new int[5]; // default value is 0
        System.out.println("Array value: " + numbers[3]); // 0

        int[] moreNumbers = {11, 12, 13, 14, 15};

        for(byte i = 0; i < numbers.length; i ++) {
            numbers[i] = i + 1;
            System.out.println("Array 'numbers' value is now: " + numbers[i]);
            System.out.println("Array 'moreNumbers' value is: " + moreNumbers[i]);
        }

    }
}
