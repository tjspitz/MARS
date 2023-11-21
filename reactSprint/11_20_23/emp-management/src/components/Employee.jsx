import { useState } from 'react';
import '../styles/Table.css';

const Employee = ({ employee, i, saveChanges }) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...employee });
  const { name, age } = form;

  const handleEditCLick = () => {
    if (editing) {
      saveChanges('edit', form, i);
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  return (
    <tr>
      <td>
        {editing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className="td-input"
          />
        ) : (
          name
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="number"
            value={age}
            onChange={(e) =>
              setForm((s) => ({ ...s, age: Number(e.target.value) }))
            }
            className="td-input"
          />
        ) : (
          age
        )}
      </td>
      <td>
        <button
          className="btn"
          onClick={handleEditCLick}
        >
          {editing ? 'SAVE' : 'EDIT'}
        </button>
      </td>
      <td>
        <button
          className="btn"
          onClick={() => saveChanges('delete', null, i)}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default Employee;
