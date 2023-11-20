import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employees from './components/Employees';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';

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
