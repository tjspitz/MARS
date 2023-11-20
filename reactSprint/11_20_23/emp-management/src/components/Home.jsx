import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employees from './Employees';
import EditEmployee from './EditEmployee';
import AddEmployee from './AddEmployee';

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Employees />}
          />
          <Route
            path="/edit"
            element={<EditEmployee />}
          />
          <Route
            path='/create'
            element={<AddEmployee />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
