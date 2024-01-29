import * as React from 'react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Courses } from '../../../lib/types';
import { UserContext } from '../../App';
import OneCourse from '../OneCourse';
import AddCourseDummyCard from './AddCourseDummyCard';

export default function AdminCourseSearch({
  searchedCourse,
  setSearchedCourse,
}: {
  searchedCourse: Courses;
  setSearchedCourse: Dispatch<SetStateAction<Courses>>;
}) {
  return (
    <main>
      <Row>
        <h3>This will be a search bar where you enter a course ID</h3>
      </Row>
      <Row>
        <h3>Maybe there could be a toggle for searching by course name</h3>
      </Row>
      <Row>
        {searchedCourse.map((course) => (
          <OneCourse
            key={course.id}
            course={course}
          />
        ))}
      </Row>
    </main>
  );
}
