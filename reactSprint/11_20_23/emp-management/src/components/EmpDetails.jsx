import { useState } from 'react';
import { empData } from '../lib/db/mockData';
import { Link } from 'react-router-dom';
import Employee from './Employee';

const EmpDetails = () => {
  const [employees, setEmployees] = useState(empData);
  const handleDelete = (idx) => {
    const newEmployees = employees.slice();
    newEmployees.splice(idx, 1);
    setEmployees(newEmployees);
  };

  return (
    <main className="app app-container">
      <form>
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
      </form>
      <Link to="/create">
        <button>Add New Employee</button>
      </Link>
    </main>
  );
};

export default EmpDetails;
