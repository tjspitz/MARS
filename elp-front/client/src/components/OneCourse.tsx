import * as React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Course } from '../../lib/types';
import { UserContext } from '../App';
import { ModalsContext } from './ManyCourses';

export default function OneCourse({
  course,
  isEnrolled,
}: {
  course: Course;
  isEnrolled?: boolean;
}) {
  const { id, name, resource, fee, description } = course;
  const userType = useContext(UserContext).type;
  const [modals, setModals] = useContext(ModalsContext);

  return (
    <Card className="m-4">
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Course ID: {id}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>Resource: {resource}</p>
          <p>Fee: {fee}</p>
          <p>Description: {description}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          type="button"
          variant="info"
          className="m-1"
          onClick={() => setModals((s) => ({...s, feedbackModal: true, selectedCourse: course }))}
        >
          Feedback
        </Button>
        {userType === 'user' && !isEnrolled && (
          <Button
            type="button"
            variant="success"
            className="mx-1"
            onClick={() => setModals((s) => ({...s, enrollModal: true, selectedCourse: course }))}
          >
            Enroll
          </Button>
        )}
        {userType === 'admin' && (
          <>
            <Button
              type="button"
              variant="info"
              className="mx-1"
              onClick={() => setModals((s) => ({...s, studentsModal: true, selectedCourse: course }))}
            >
              Students
            </Button>
            <Button
              type="button"
              variant="warning"
              className="mx-1"
              onClick={() => setModals((s) => ({...s, editModal: true, selectedCourse: course }))}
            >
              Edit Course
            </Button>
            <Button
              type="button"
              variant="danger"
              className="mx-1"
              onClick={() => setModals((s) => ({...s, deleteModal: true, selectedCourse: course }))}
            >
              Delete Course
            </Button>
          </>
        )}
      </Card.Footer>
    </Card>
  );
}
