import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage'
import SuccessPage from './SuccessPage';
import FailPage from './FailPage';

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
