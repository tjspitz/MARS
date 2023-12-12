package com.returnship.training;

public class Employee {
	// static variable, is same for all Employees
		// can be changed, but will reflect for every instance
	static String companyName;
	
	// instance variables (new copy per instance of the Employee)
		// should always be private
	private int id;
	private String name;
	private byte age;
	
	
	// get and set private instance vars via public methods
	public static String getCompanyName() {
		return companyName;
	}

	public static void setCompanyName(String companyName) {
		Employee.companyName = companyName;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte getAge() {
		return this.age;
	}

	public void setAge(byte age) {
		this.age = age;
	}

	public String getDetails() {
		return "Employer: " + companyName + ", Employee name: " + name + ", id: " +  id + ", age: " + age;
	}
	
}
