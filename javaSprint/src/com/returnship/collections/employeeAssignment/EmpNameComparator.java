package com.returnship.collections.employeeAssignment;

import java.util.Comparator;

public class EmpNameComparator implements Comparator<Employee>{

    @Override
    public int compare(Employee o1, Employee o2) {
        return o1.getName().compareToIgnoreCase(o2.getName());
    }

}
