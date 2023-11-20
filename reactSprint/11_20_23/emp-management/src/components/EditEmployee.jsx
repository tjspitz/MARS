import { useState, useEffect } from 'react';
import { empData } from '../lib/db/mockData';
import { useNavigate } from 'react-router-dom';

const initialState = {
  id: '',
  name: '',
  age: '',
};

const EditEmployee = () => {
  const [form, setForm] = useState({ ...initialState });
  const navigate = useNavigate();

  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem('employee'));
    const newForm = {
      id: employee.id,
      name: employee.name,
      age: employee.age,
    };
    setForm(newForm);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = empData.findIndex((emp) => emp.id === form.id);
    empData[target] = form;
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => {
            setForm((s) => ({ ...s, name: e.target.value }));
          }}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={form.age}
          onChange={(e) => {
            setForm((s) => ({ ...s, age: Number(e.target.value) }));
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditEmployee;
