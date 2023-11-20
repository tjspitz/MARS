import { Link } from 'react-router-dom';

const Employee = ({ employee }) => {
  const { id, name, age } = employee;

  const handleEdit = (emp) => {
    const {id, name, age} = emp;

    console.log(
      `Employee details:
      id: ${id},
      name: ${name},
      age: ${age}`
    );

    localStorage.setItem(id, JSON.stringify(emp));
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <Link to="/edit">
          <button onClick={() => handleEdit(employee)}>(edit)</button>
        </Link>
      </td>
      <td>(action button)</td>
    </tr>
  );
};

export default Employee;
