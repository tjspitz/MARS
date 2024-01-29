import * as React from 'react';
import { Course, CourseModals } from '../../../lib/types';

export default function StudentsModal({
  modals,
  setModals,
}: {
  modals: CourseModals;
  setModals: React.Dispatch<React.SetStateAction<CourseModals>>;
}) {
  const { studentsModal, selectedCourse } = modals;
  return null;
}