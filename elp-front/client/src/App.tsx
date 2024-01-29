import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { User, initialUserState } from '../lib/types';
import { getUserById } from '../lib/usersApi';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ErrorPage from './components/ErrorPage';
import ManyCourses from './components/ManyCourses';
import Profile from './components/Profile';

export const UserContext = React.createContext<User>({ ...initialUserState });
export const UpdateContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}])

export default function App() {
  const [user, setUser] = React.useState<User>({ ...initialUserState });
  const [updated, setUpdated] = React.useState<boolean>(false)

  React.useEffect(() => {
    // 'user' types are ids 1-8, 'admin' are 9-10
    getUserById(9)
      .then((user) => setUser(user))
      .catch((e) => console.error(e));
  }, [updated]);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/courses"
            element={<ManyCourses />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/profile"
            element={<Profile />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/signin"
            element={<SignIn />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/error"
            element={<ErrorPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
