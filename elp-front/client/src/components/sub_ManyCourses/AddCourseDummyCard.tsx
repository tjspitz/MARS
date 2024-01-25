import * as React from 'react';
import { useState, useContext } from 'react';
import OneCourse from '../OneCourse';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Courses } from '../../../lib/types';

export default function AddCourseDummyCard() {

  return (
    <div>
      This should be a course-card-shaped button, onClick it pops up a modal to POST a new course.
    </div>
  );
}
