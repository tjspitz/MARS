import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';

export default function FeedbackForm({
  userName,
  userEmail,
  formMessage,
  setFormMessage,
}: {
  userName: string;
  userEmail: string;
  formMessage: string;
  setFormMessage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormMessage(e.target.value);
  };

  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="userName"
      >
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          value={userName}
          disabled
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="email"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={userEmail}
          disabled
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="message"
      >
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Please enter your feedback here."
          value={formMessage}
          onChange={handleMessageChange}
        />
      </Form.Group>
    </Form>
  );
}
