import { useState } from 'react';
import Header from './Header';
import Employee from './Employee';
import SearchEmployee from './SearchEmployee';
import '../styles/Table.css';

import AddEmployee from './AddEmployee';

const Employees = ({ employeeData }) => {
  const [employees, setEmployees] = useState(employeeData);

  const saveChanges = (change, data, idx) => {
    if (change === 'add') {
      setEmployees([...employees, data]);
    } else if (change === 'edit') {
      const newEmployees = [...employees];
      newEmployees[idx].name = data.name;
      newEmployees[idx].age = data.age;
      setEmployees(newEmployees);
    } else if (change === 'delete') {
      const newEmployees = [...employees];
      newEmployees.splice(idx, 1);
      setEmployees(newEmployees);
    } else {
      throw new Error('Unsupported change request!');
    }
  };

  return (
    <>
      <SearchEmployee setEmployees={setEmployees} />
      <section className="content">
        <Header text={'Employee Details'} />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, i) => {
                return (
                  <Employee
                    i={i}
                    key={employee.id}
                    employee={employee}
                    saveChanges={saveChanges}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <AddEmployee saveChanges={saveChanges} />
    </>
  );
};

export default Employees;
