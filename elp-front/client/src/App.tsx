import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ManyCourses from './components/ManyCourses';
import Profile from './components/Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { User, initialUserState } from '../lib/types';
import { getUserById } from '../lib/usersApi';

export const UserContext = React.createContext<User>({ ...initialUserState });
export const UpdateContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}])

export default function App() {
  const [user, setUser] = React.useState<User>({ ...initialUserState });
  const [updated, setUpdated] = React.useState<boolean>(false)

  React.useEffect(() => {
    getUserById(1)
      .then((user) => setUser(user))
      .catch((e) => console.error(e));
  }, [updated]);

  return (
    <UserContext.Provider value={user}>
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/courses"
            element={<ManyCourses />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
