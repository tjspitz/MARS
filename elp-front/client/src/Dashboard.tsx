import * as React from 'react';
import { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './App';

// we would only be allowed here after we're signed in
export default function Dashboard() {
  const user = useContext(UserContext);
  const { firstName, lastName } = user;
  const navigate = useNavigate();

  return (
    <main className="m-4">
      <h1 className="p-2">
        Hello, {firstName} {lastName}!
      </h1>
      <h3 className="p-2">You are on the Dashboard Page right now.</h3>
      <Stack
        className="p-2"
        direction="horizontal"
        gap={5}
      >
        <Button
          type="button"
          variant="primary"
          className="p-2"
          onClick={() => navigate('/courses')}
        >
          View Courses
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={() => navigate('/profile')}
        >
          View Profile
        </Button>
      </Stack>
    </main>
  );
}
