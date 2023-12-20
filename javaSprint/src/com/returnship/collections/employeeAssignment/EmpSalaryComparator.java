package com.returnship.collections.employeeAssignment;

import java.util.Comparator;

public class EmpSalaryComparator implements Comparator<Employee> {

    @Override
    public int compare(Employee o1, Employee o2) {
        if (o1.getSalary() > o2.getSalary()) {
            return 1;
        } else if (o1.getSalary() < o2.getSalary()) {
            return -1;
        } else {
            return 0;
        } 
    }

}
