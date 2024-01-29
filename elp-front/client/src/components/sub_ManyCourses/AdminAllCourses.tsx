import * as React from 'react';
import { useState, useContext } from 'react';
import OneCourse from '../OneCourse';
import AddCourseDummyCard from './AddCourseDummyCard';
import { Row, Col } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Courses } from '../../../lib/types';

export default function AdminAllCourses({
  allCourses,
}: {
  allCourses: Courses;
}) {
  return (
    <main>
      <Row>
        <Col>
          <h3>There are {allCourses.length} courses in the catalog:</h3>
        </Col>
      </Row>
      <Row>
        {<AddCourseDummyCard />}
        {allCourses.map((course) => (
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <OneCourse
              key={course.id}
              course={course}
            />
          </Col>
        ))}
      </Row>
    </main>
  );
}
