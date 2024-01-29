import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { putFeedbackById } from '../../../lib/feedbackApi';
import { Feedback } from '../../../lib/types';
import { UpdateContext, UserContext } from '../../App';

export default function OneFeedback({ data }: { data: Feedback }) {
  const userType = React.useContext(UserContext).type;
  const { id, name, email, message, flagged } = data;
  const [isFlagged, setIsFlagged] = React.useState<boolean>(flagged);
  const [updated, setUpdated] = React.useContext(UpdateContext);

  const handleFeedbackUpdate = () => {
    const updatedFeedback = {
      ...data,
      flagged: isFlagged,
    };
    console.log('update is: ', updatedFeedback)
    putFeedbackById(updatedFeedback, id)
      .then(() => setUpdated(!updated))
      .catch((e) => console.error(e));
  };

  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="name"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          disabled
        >
        </Form.Control>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="email"
      >
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          disabled
        >
        </Form.Control>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="message"
      >
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          value={message}
          disabled
        >
        </Form.Control>
      </Form.Group>
      {userType === 'admin' && (
        <>
          <Form.Group controlId="flagged">
            <Form.Check
              type="checkbox"
              label="Flagged"
              checked={isFlagged}
              onChange={() => setIsFlagged(!isFlagged)}
            />
          </Form.Group>
          <Button
            variant={flagged === isFlagged ? "text" : "warning"}
            type="button"
            className="m-1"
            disabled={flagged === isFlagged}
            onClick={handleFeedbackUpdate}
          >
            Save
          </Button>
        </>
      )}
    </Form>
  );
}
