import * as React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { postFeedbackByCourseId } from '../../../lib/feedbackApi';
import { CourseModals, initialCourseState } from '../../../lib/types';
import { UpdateContext, UserContext } from '../../App';
import FeedbackForm from './FeedbackForm';
import OneFeedback from './OneFeedback';

export default function FeedbackModal({
  modals,
  setModals,
}: {
  modals: CourseModals;
  setModals: React.Dispatch<React.SetStateAction<CourseModals>>;
}) {
  const { feedbackModal, selectedCourse } = modals;
  const userName =
    React.useContext(UserContext).firstName +
    ' ' +
    React.useContext(UserContext).lastName;
  const userEmail = React.useContext(UserContext).email;
  const [updated, setUpdated] = React.useContext(UpdateContext);
  const [formMessage, setFormMessage] = React.useState<string>('');

  const handleClose = () => {
    setFormMessage('');
    setModals((s) => ({
      ...s,
      feedbackModal: false,
      selectedCourse: { ...initialCourseState },
    }));
  };
  const handleSubmit = () => {
    const feedback = {
      name: userName,
      email: userEmail,
      message: formMessage,
    };
    postFeedbackByCourseId(feedback, selectedCourse.id)
      .then((res) => console.log('post successful: ', res))
      .catch((e) => console.error(e))
      .finally(() => setUpdated(!updated));
  };

  return (
    <Modal
      show={feedbackModal}
      onHide={handleClose}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {selectedCourse.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            {selectedCourse.feedback.map((msg, i) => {
              return (
                <OneFeedback
                  key={'f-' + i}
                  msg={msg}
                />
              )
            })}
          </Col>
          <Col>
            <FeedbackForm
              userName={userName}
              userEmail={userEmail}
              formMessage={formMessage}
              setFormMessage={setFormMessage}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
        >
          Submit Feedback
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
