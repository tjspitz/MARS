import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const secrets = {
  username: 'happy',
  password: 'birthday',
};

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === secrets.username && password === secrets.password) {
      navigate('/success')
    } else {
      navigate('/fail');
    }
  };

  return (
    <>
      <main className="app app-container">
        <div className="content">
          <h1>Please enter your credentials...</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <label htmlFor="username">
                Username:
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  id="password"
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? 'Hide' : 'Show'}
                </button>
              </label>
            </div>
            <button className="btn">Log In</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
