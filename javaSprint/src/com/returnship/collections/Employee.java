package com.returnship.collections;

import java.util.Date;
import java.util.Objects;

public class Employee {
    private int id;
    private String name;
    private String department;
    private Date hireDate;
    private double salary;
    
    public Employee(int id, String name, String department, Date hireDate, double salary) {
        super();
        this.id = id;
        this.name = name;
        this.department = department;
        this.hireDate = hireDate;
        this.salary = salary;
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

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Date getHireDate() {
        return hireDate;
    }

    public void setHireDate(Date hireDate) {
        this.hireDate = hireDate;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public int hashCode() {
        return this.id;
    }

    @Override
    public boolean equals(Object obj) {
        Employee other = (Employee) obj;
        return Objects.equals(department, other.department)
                && id == other.id
                && Objects.equals(hireDate, other.hireDate) 
                && Objects.equals(name, other.name)
                && Double.doubleToLongBits(salary) == Double
                        .doubleToLongBits(other.salary);
    }

    @Override
    public String toString() {
        return "Employees [id=" + id + ", name=" + name + ", department="
                + department + ", hireDate=" + hireDate + ", salary=" + salary
                + "]";
    }
}
