import { employeeData } from './lib/db/mockData';
import Employees from './components/Employees';

const Home = () => {
  return (
    <main className="app app-container">
      <Employees employeeData={employeeData} />
    </main>
  );
};

export default Home;
