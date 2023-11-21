import { useState } from 'react';
import { empData } from '../lib/db/mockData';
import { Link } from 'react-router-dom';
import Header from './Header';
import Employee from './Employee';
import SearchEmployee from './SearchEmployee';
import '../styles/Table.css';

const Employees = () => {
  const [employees, setEmployees] = useState(empData);

  const handleDelete = (idx) => {
    const newEmployees = employees.slice();
    newEmployees.splice(idx, 1);
    setEmployees(newEmployees);
  };

  return (
    <>
      <section>
        <SearchEmployee
          employees={employees}
          setEmployees={setEmployees}
        />
      </section>
      <main className="app app-container">
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
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <Link to="/create">
          <button className="btn">Add New Employee</button>
        </Link>
      </main>
    </>
  );
};

export default Employees;
