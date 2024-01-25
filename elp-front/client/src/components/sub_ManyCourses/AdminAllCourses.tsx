import * as React from 'react';
import { useState, useContext } from 'react';
import OneCourse from '../OneCourse';
import AddCourseDummyCard from './AddCourseDummyCard';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Courses } from '../../../lib/types';

export default function AdminAllCourses({ allCourses }: { allCourses: Courses }) {

  return (
    <main>
      <h3>
        There are {allCourses.length} courses in the course catalog:
      </h3>
      {<AddCourseDummyCard />}
      {allCourses.map((course) => (
        <OneCourse
          key={course.id}
          course={course}
        />
      ))}
    </main>
  );
}
