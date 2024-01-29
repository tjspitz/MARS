import * as React from 'react';
import { Course, CourseModals } from '../../../lib/types';

export default function EnrollModal({
  modals,
  setModals,
}: {
  modals: CourseModals;
  setModals: React.Dispatch<React.SetStateAction<CourseModals>>;
}) {
  const { enrollModal, selectedCourse } = modals;
  return null;
}