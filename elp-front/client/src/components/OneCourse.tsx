import * as React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../App';
import { Button, Card, Modal } from 'react-bootstrap';
import { Course, CourseModals, initialModalsState } from '../../lib/types';

export default function OneCourse({
  course,
  isEnrolled,
}: {
  course: Course;
  isEnrolled?: boolean;
}) {
  const userType = useContext(UserContext).type;
  const { id, name, resource, fee, description, feedback } = course;
  const [modals, setModals] = useState<CourseModals>({ ...initialModalsState });

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
          className="mx-1"
          onClick={() => setModals((s) => ({...s, feedbackModal: true}))}
        >
          Feedback
        </Button>
        {userType === 'user' && !isEnrolled && (
          <Button
            type="button"
            variant="success"
            className="mx-1"
            onClick={() => setModals((s) => ({...s, enrollModal: true}))}
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
              onClick={() => setModals((s) => ({...s, studentsModal: true}))}
            >
              Students
            </Button>
            <Button
              type="button"
              variant="warning"
              className="mx-1"
              onClick={() => setModals((s) => ({...s, editModal: true}))}
            >
              Edit Course
            </Button>
            <Button
              type="button"
              variant="danger"
              className="mx-1"
              onClick={() => setModals((s) => ({...s, deleteModal: true}))}
            >
              Delete Course
            </Button>
          </>
        )}
      </Card.Footer>
    </Card>
  );
}
