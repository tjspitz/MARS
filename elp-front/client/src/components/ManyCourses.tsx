import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import { Container, Button } from 'react-bootstrap';
import { Course, Courses, initialCoursesState } from '../../lib/types';
import StudentCoursesEnrolled from './sub_ManyCourses/StudentCoursesEnrolled';
import StudentCoursesNotEnrolled from './sub_ManyCourses/StudentCoursesNotEnrolled';
import AdminCourseSearch from './sub_ManyCourses/AdminCourseSearch';
import AdminAllCourses from './sub_ManyCourses/AdminAllCourses';
import axios from 'axios';

export default function ManyCourses() {
  const [allCourses, setAllCourses] = useState<Courses>([
    ...initialCoursesState,
  ]);
  const [filteredCourses, setFilteredCourses] = useState<Courses | []>([]);

  const userCourses = useContext(UserContext).courses;
  const userType = useContext(UserContext).type;

  useEffect(() => {
    axios
      .get('api/courses')
      .then(({ data }) => {
        if (userType === 'user') {
          const coursesNotEnrolledIn = filterOutEnrolled(data, userCourses);
          setFilteredCourses(coursesNotEnrolledIn);
        }
        setAllCourses(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <Container>
      <main>
        <h1>Welcome to Course Management</h1>
        {userType === 'user' && (
          <>
            <StudentCoursesEnrolled />
            <StudentCoursesNotEnrolled remainingCourses={filteredCourses} />
          </>
        )}
        {userType === 'admin' && (
          <>
            <AdminCourseSearch
              searchedCourse={filteredCourses}
              setSearchedCourse={setFilteredCourses}
            />
            <AdminAllCourses allCourses={allCourses} />
          </>
        )}

        {/* could be the first card in the allCourses list */}
        {userType === 'admin' && (
          <Button
            type="button"
            variant="secondary"
          >
            Add a New Course
          </Button>
        )}
      </main>
    </Container>
  );
}

function filterOutEnrolled(alLCourses: Courses, enrolledInCourses: Courses) {
  const enrolledIds: number[] = enrolledInCourses.map(
    (course: Course) => course.id
  );
  return alLCourses.filter(
    (course: Course) => !enrolledIds.includes(course.id)
  );
}
