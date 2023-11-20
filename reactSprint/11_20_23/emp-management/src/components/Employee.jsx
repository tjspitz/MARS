import { Link } from 'react-router-dom';

const Employee = ({ employee, i, handleDelete }) => {
  const { name, age } = employee;

  const handleEdit = () => {
    localStorage.setItem('employee', JSON.stringify(employee));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <Link to="/edit">
          <button className="btn" onClick={handleEdit}>EDIT</button>
        </Link>
      </td>
      <td>
        <button className="btn" onClick={() => handleDelete(i)}>DELETE</button>
      </td>
    </tr>
  );
};

export default Employee;
