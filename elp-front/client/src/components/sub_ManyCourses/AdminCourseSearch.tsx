import * as React from 'react';
import { Dispatch, SetStateAction, useState, useContext } from 'react';
import OneCourse from '../OneCourse';
import AddCourseDummyCard from './AddCourseDummyCard';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Courses } from '../../../lib/types';

export default function AdminCourseSearch({
  searchedCourse,
  setSearchedCourse,
}: {
  searchedCourse: Courses;
  setSearchedCourse: Dispatch<SetStateAction<Courses>>;
}) {
  return (
    <main>
      <h3>This will be a search bar where you enter a course ID</h3>
      <h3>Maybe there could be a toggle for searching by course name</h3>
      {searchedCourse.map((course) => (
        <OneCourse
          key={course.id}
          course={course}
        />
      ))}
    </main>
  );
}
