import { useState } from 'react';
import Header from './Header';
import uuid from 'react-uuid';
import '../styles/App.css';
import '../styles/Form.css';

const initialState = {
  name: '',
  age: '',
};

const AddEmployee = ({ saveChanges }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: uuid(),
      name: form.name,
      age: form.age,
    };
    saveChanges('add', newEmployee);
    setShowAdd(!showAdd);
  };

  return showAdd ? (
    <section className="content">
      <Header text={'Please enter new employee information'} />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              setForm((s) => ({ ...s, name: e.target.value }));
            }}
          />
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => {
              setForm((s) => ({ ...s, age: Number(e.target.value) }));
            }}
          />
          <button
            className="btn"
            type="button"
            onClick={() => setShowAdd(!showAdd)}
          >
            Cancel
          </button>
          <button
            className="btn"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  ) : (
    <button
      className="btn"
      onClick={() => setShowAdd(!showAdd)}
    >
      Add New Employee
    </button>
  );
};

export default AddEmployee;
