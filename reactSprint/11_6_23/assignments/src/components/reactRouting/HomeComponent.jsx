import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const HomeComponent = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <ul>
            {/* <li>
              <Link to="/home">Go to Home Component</Link>
            </li> */}
            <li>
              <Link to="/comp-one">Go to Component One</Link>
            </li>
            <li>
              <Link to="/comp-two">Go to Component Two</Link>
            </li>
            <li>
              <Link to="/comp-three">Go to Component Three</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route
            path="/home"
            element={<HomeComponent />}
          /> */}
          <Route
            path="/comp-one"
            element={<ComponentOne />}
          />
          <Route
            path="/comp-two"
            element={<ComponentTwo />}
          />
          <Route
            path="/comp-three"
            element={<ComponentThree />}
          />
        </Routes>
      </BrowserRouter>
      <main className="app-container">
        <div className="content">
          <h2>This is the Home component</h2>
        </div>
      </main>
    </div>
  );
};

export default HomeComponent;

/*
Refactor the login assignment utilizing react-router-dom
*/