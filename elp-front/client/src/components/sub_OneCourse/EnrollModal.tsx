import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { putUserInCourseById } from '../../../lib/coursesApi';
import { CourseModals, initialCourseState } from '../../../lib/types';
import { UpdateContext, UserContext } from '../../App';

export default function EnrollModal({
  modals,
  setModals,
}: {
  modals: CourseModals;
  setModals: React.Dispatch<React.SetStateAction<CourseModals>>;
}) {
  const { enrollModal, selectedCourse } = modals;
  const [updated, setUpdated] = React.useContext(UpdateContext);
  const userId = React.useContext(UserContext).id;

  const handleClose = () => {
    setModals((s) => ({
      ...s,
      enrollModal: false,
      selectedCourse: { ...initialCourseState },
    }));
  };
  const handleSubmit = () => {
    putUserInCourseById(userId, selectedCourse.id)
      .then(() => {
        console.log('enrollment successful!');
        handleClose();
        setUpdated(!updated);
      })
      .catch((e) => console.error(e))
  };

  return (
    <Modal
      show={enrollModal}
      onHide={handleClose}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Enrollment?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to enroll in {selectedCourse.name}?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}