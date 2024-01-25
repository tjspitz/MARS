import * as React from 'react';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ManyCourses from './components/ManyCourses';
import Profile from './components/Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { User, initialUserState } from '../lib/types';
import axios from 'axios';

export const UserContext = createContext({ ...initialUserState });

export default function App() {
  const [user, setUser] = useState<User>({ ...initialUserState });

  useEffect(() => {
    axios
      .get('/api/users/id?id=1')
      .then(({ data }) => setUser(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <UserContext.Provider value={user}>
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
