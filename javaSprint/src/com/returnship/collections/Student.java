package com.returnship.collections;

import java.util.Objects;

// removed the 'Comparable<Student>' 
    // since we now have external Comparator classes (id, name, grade)
public class Student {
    private int id;
    private String name;
    private int age;
    private String grade;
    
    public Student(String name, int age, String grade, int id) {
        super();
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getGrade() {
        return grade;
    }
    public void setGrade(String grade) {
        this.grade = grade;
    }
    
    // provide overrides for hashCode() AND equals() to ensure no duplicates
    @Override
    public int hashCode() {
        // return Objects.hash(age, grade, name);
        return this.id;
    }

    @Override
    public boolean equals(Object obj) {
        Student other = (Student) obj;
        return id == other.id && age == other.age && Objects.equals(grade, other.grade)
                && Objects.equals(name, other.name);
    }

    @Override
    public String toString() {
        return "Student [name=" + name + ", age=" + age + ", grade=" + grade
                + "]";
    }
    
    // removed since we are now making use of the external Comparator classes
//    // provide an override so we can use TreeSet's sorting behavior
//    @Override
//    public int compareTo(Student s) {
//        // return this.name.compareToIgnoreCase(s.name);
//        return this.grade.compareToIgnoreCase(s.grade);
//    }
}
