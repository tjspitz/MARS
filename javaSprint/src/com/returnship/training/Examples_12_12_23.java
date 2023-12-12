package com.returnship.training;
import java.util.Scanner;

public class Examples_12_12_23 {
	static int i;
	
	public static void examples() {
		System.out.println(MyClass.greeting());
		
		Scanner sc = new Scanner(System.in);
		int scVal = sc.nextInt();
		sc.close(); // no memory leaks, Batman
		System.out.println("Input value is : " + scVal);
		
		byte b = 21; // -128 thru 127
		short s = b;
		byte b1 = (byte) s; // explicit type casting
		float f = 3.14f; // without 'f' it is inferred as a double
		
		String str = "I am a banana"; // non-primitive
		
		System.out.println("Value of b and s are both: " + b);
		System.out.println("Value of b1 is also: " + b1);
		System.out.println("Value of f is: " + f);
		System.out.println("Value of str is: " + str);
		System.out.println("Value of i has defaulted to: " + i);
		
		Employee.companyName = "MARS"; // every instance
		Employee emp1 = new Employee();
//		emp1.id = 101;
//		emp1.name = "Bob";
//		emp1.age = 32;
		emp1.setId(101);
		emp1.setName("Bob");
		emp1.setAge((byte) 32);
		
		Employee emp2 = new Employee();
//		emp2.id = 102;
//		emp2.name = "Bill";
//		emp2.age = 72;
		emp2.setId(102);
		emp2.setName("Bill");
		emp2.setAge((byte) 72);
		
		emp2 = null; // de-allocate the memory
		
		System.out.println(emp1.getDetails());
//		System.out.println(emp2.getDetails()); // would fail
	}
}
