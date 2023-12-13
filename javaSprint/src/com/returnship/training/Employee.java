package com.returnship.training;

import java.util.Objects;

public class Employee {
    // static variable, is same for all Employees
      // can be changed, but will reflect for every instance
    static String companyName;

    // instance variables (new copy per instance of the Employee)
      // should always be private
    private int id;
    private String name;
    private byte age;

    // Constructor (is present regardless)
        // takes the place of setter methods
    public Employee(int id, String name, byte age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    // Another constructor
        // so that examples from 12/12 aren't permabroke
    public Employee() {
        // vast emptiness...
    }

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

//    @Override
//    // overriding a class (all classes have an Object superclass)
//    // and the Object class has a toString() method
//    public String toString() {
//        // we could put the getDetails() implementation in here
//            // if we wanted to
//        return "Employee object toString() was called";
//    }

      @Override
      public int hashCode() {
          return this.id;
//          return Objects.hash(age, id, name);
      }

      @Override
      public boolean equals(Object obj) {
//          if (this == obj)
//              return true;
//          if (obj == null)
//              return false;
//          if (getClass() != obj.getClass())
//              return false;
          Employee other = (Employee) obj;
          return age == other.age && id == other.id
                  && Objects.equals(name, other.name);
      }
}
