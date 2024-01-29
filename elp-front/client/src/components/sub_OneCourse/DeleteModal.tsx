import * as React from 'react';
import { Course, CourseModals } from '../../../lib/types';

export default function DeleteModal({
  modals,
  setModals,
}: {
  modals: CourseModals;
  setModals: React.Dispatch<React.SetStateAction<CourseModals>>;
}) {
  const { deleteModal, selectedCourse } = modals;
  return null;
}