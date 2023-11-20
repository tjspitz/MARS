import { useState } from 'react';
import { empData } from '../lib/db/mockData';
import { Link } from 'react-router-dom';
import Employee from './Employee';

const EmpDetails = () => {
  const [employees, setEmployees] = useState(empData);
  return (
    <main className='app app-container'>
      <h1>Hi, here are some employee details:</h1>
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
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  employee={employee}
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
