import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SuccessPage from './components/SuccessPage';
import FailPage from './components/FailPage';

const AuthApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthApp;
