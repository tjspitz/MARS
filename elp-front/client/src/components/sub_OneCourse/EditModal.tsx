import * as React from 'react';
import { Course, CourseModals } from '../../../lib/types';

export default function EditModal({
  modals,
  setModals,
}: {
  modals: CourseModals;
  setModals: React.Dispatch<React.SetStateAction<CourseModals>>;
}) {
  const { editModal, selectedCourse } = modals;
  return null;
}