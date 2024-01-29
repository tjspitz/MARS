import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Courses } from '../../../lib/types';
import OneCourse from '../OneCourse';

export default function StudentCoursesNotEnrolled({
  remainingCourses,
}: {
  remainingCourses: Courses;
}) {
  return (
    <Container>
      <main>
        <Row>
          <Col>
            <h3>There are {remainingCourses.length} courses available:</h3>
          </Col>
        </Row>
        <Row>
          {remainingCourses.map((course) => (
            <Col xs={12} sm={6} md={4} lg={4}>
              <OneCourse
                key={'scne-' + course.id}
                course={course}
              />
            </Col>
          ))}
        </Row>
      </main>
    </Container>
  );
}
