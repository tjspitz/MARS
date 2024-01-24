import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

interface Course {
  id: number;
  name: string;
  resource: string;
  fee: number;
  description: string;
  feedback: any;
}

const initialState: Course = {
  id: 0,
  name: '',
  resource: '',
  fee: 0,
  description: '',
  feedback: [],
};

type Courses = Course[];

export default function Tester({ name }: { name: string }) {
  const [courses, setCourses] = useState<Courses>([{ ...initialState }]);
  // const [course, setCourse] = useState<Course>({ ...initialState });
  // const [users, setUsers] = useState([]);
  // const [userId, setUserId] = useState({});
  // const [userName, setUserName] = useState({});
  // const [feedback, setFeedback] = useState([]);
  // const [feedbackId, setFeedbackId] = useState({});

  useEffect(() => {
    axios
      .get('/api/courses')
      .then(({ data }) => setCourses([...data]))
      .catch((e) => console.error(e));
    // axios
    //   .get('/api/courses/id?id=1')
    //   .then(({ data }) => setCourse(data))
    //   .catch((e) => console.error(e));
    // axios
    //   .get('/api/users')
    //   .then(({ data }) => setUsers([...data]))
    //   .catch((e) => console.error(e));
    // axios
    //   .get('/api/users/id?id=1')
    //   .then(({ data }) => setUserId(data))
    //   .catch((e) => console.error(e));
    // axios
    //   .get('/api/users/name?name=Doe')
    //   .then(({ data }) => setUserName(data))
    //   .catch((e) => console.error(e));
    // axios
    //   .get('/api/courses/feedback')
    //   .then(({ data }) => setFeedback([...data]))
    //   .catch((e) => console.error(e));
    // axios
    //   .get('/api/courses/feedback/id?id=52')
    //   .then(({ data }) => setFeedbackId(data))
    //   .catch((e) => console.error(e));
  }, []);

  return (
    <main>
      <h1>Hello, {name}!</h1>
      <Button
        type="button"
        variant="primary"
      >
        This is a bootstrap button!
      </Button>
    </main>
  );
}
