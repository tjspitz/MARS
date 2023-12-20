package com.returnship.collections.employeeAssignment;

import java.util.Comparator;

public class EmpDeptComparator implements Comparator<Employee> {

    @Override
    public int compare(Employee o1, Employee o2) {
        return o1.getDepartment().compareToIgnoreCase(o2.getDepartment());
    }

}
