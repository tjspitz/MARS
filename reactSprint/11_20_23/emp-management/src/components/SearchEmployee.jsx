import { useState, useEffect, useRef } from 'react';
import { employeeData } from '../lib/db/mockData';
import Header from './Header';
import '../styles/Form.css';

const SearchEmployee = ({ setEmployees }) => {
  const [search, setSearch] = useState('');
  const searchRef = useRef(search);
  var throttle;

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    clearTimeout(throttle);
    throttle = setTimeout(findEmployees, 500);
  };

  const findEmployees = () => {
    const query = searchRef.current.toLowerCase();
    const foundEmployees = employeeData.filter((emp) =>
      emp.name.toLowerCase().includes(query)
    );
    setEmployees(foundEmployees);
  };

  return (
    <section className="content">
      <Header text={'Employee Search'} />
      <div className="form-container">
        <input
          type="text"
          placeholder="begin typing..."
          onChange={handleSearchChange}
        />
      </div>
    </section>
  );
};

export default SearchEmployee;

/*
  // SEARCHING BY ID
  const handleSearchChange = (e) => {
    setSearch(Number(e.target.value));
  };

  const handleSearchClick = () => {
    const found = empData.filter((emp) => emp.id === search);
    setEmployees(found);
  };

  // add under the input tag
  <button
    className="btn"
    onClick={handleSearchClick}
  >
    Search
  </button>
*/
