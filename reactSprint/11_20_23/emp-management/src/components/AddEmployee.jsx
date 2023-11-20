import { useState } from 'react';
import { empData } from '../lib/db/mockData';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import '../styles/App.css';
import '../styles/Form.css';

const initialState = {
  name: '',
  age: '',
};
const AddEmployee = () => {
  const [form, setForm] = useState({ ...initialState });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: uuid(),
      name: form.name,
      age: form.age,
    };

    empData.push(newEmployee);
    navigate('/');
  };

  return (
    <div className="app app-container">
      <h2>Please enter new employee information</h2>
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
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
