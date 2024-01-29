import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
import { getAllCourses } from '../../lib/coursesApi';
import {
  Course,
  CourseModals,
  Courses,
  initialCoursesState,
  initialModalsState,
} from '../../lib/types';
import { UpdateContext, UserContext } from '../App';
import AdminAllCourses from './sub_ManyCourses/AdminAllCourses';
import AdminCourseSearch from './sub_ManyCourses/AdminCourseSearch';
import StudentCoursesEnrolled from './sub_ManyCourses/StudentCoursesEnrolled';
import StudentCoursesNotEnrolled from './sub_ManyCourses/StudentCoursesNotEnrolled';
import DeleteModal from './sub_OneCourse/DeleteModal';
import EditModal from './sub_OneCourse/EditModal';
import EnrollModal from './sub_OneCourse/EnrollModal';
import FeedbackModal from './sub_OneCourse/FeedbackModal';
import StudentsModal from './sub_OneCourse/StudentsModal';

export const ModalsContext = React.createContext<
  [CourseModals, React.Dispatch<React.SetStateAction<CourseModals>>]
>([{ ...initialModalsState }, () => {}]);

export default function ManyCourses() {
  const [allCourses, setAllCourses] = React.useState<Courses>([
    ...initialCoursesState,
  ]);
  const [filteredCourses, setFilteredCourses] = React.useState<Courses | []>([]);
  const [modals, setModals] = React.useState<CourseModals>({ ...initialModalsState });

  const userCourses = React.useContext(UserContext).courses;
  const userType = React.useContext(UserContext).type;
  const [updated, setUpdated] = React.useContext(UpdateContext);

  React.useEffect(() => {
    getAllCourses()
      .then((courses) => {
        if (userType === 'user') {
          const coursesNotEnrolledIn = filterOutEnrolled(courses, userCourses);
          setFilteredCourses(coursesNotEnrolledIn);
        }
        setAllCourses(courses);
      })
      .catch((e) => console.error(e));
  }, [updated]);

  return (
    <Container>
      <>
        <main>
          <h1>Welcome to Course Management</h1>
          <ModalsContext.Provider value={[modals, setModals]}>
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
          </ModalsContext.Provider>
        </main>
        <section>
          <FeedbackModal
            modals={modals}
            setModals={setModals}
          />
          <EnrollModal
            modals={modals}
            setModals={setModals}
          />
          <StudentsModal
            modals={modals}
            setModals={setModals}
          />
          <EditModal
            modals={modals}
            setModals={setModals}
          />
          <DeleteModal
            modals={modals}
            setModals={setModals}
          />
        </section>
      </>
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
