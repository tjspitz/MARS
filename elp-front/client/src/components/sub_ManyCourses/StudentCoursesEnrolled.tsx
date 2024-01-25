import * as React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../../App';
import OneCourse from '../OneCourse';
import { Courses } from '../../../lib/types';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function StudentCoursesEnrolled() {
  const userCourses = useContext(UserContext).courses;

  return (
    <Container>
      <main>
        <Row>
          <Col>
            <h3>
              You are currently enrolled in {userCourses.length}{' '}
              {userCourses.length === 1 ? 'course' : 'courses'}:
            </h3>
          </Col>
        </Row>
        <Row>
          {userCourses.map((course) => (
            <Col xs={12} sm={6} md={4} lg={4}>
              <OneCourse
                key={course.id}
                course={course}
                isEnrolled={true}
              />
            </Col>
          ))}
        </Row>
      </main>
    </Container>
  );
}
