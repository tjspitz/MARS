export type Courses = Course[];

export interface Course {
  id: number;
  name: string;
  resource: string;
  fee: number;
  description: string;
  feedback: Feedback[];
};

export interface Feedback {
  id: number;
  name: string;
  email: string;
  message: string;
  flagged: boolean;
};

export interface Address {
  id: number;
  street: string;
  city: string;
};

export interface User {
  id: number;
  type: string;
  firstName: string;
  lastName: string;
  registrationDate: Date;
  phone: string;
  photo: string;
  email: string;
  password: string;
  address: Address;
  courses: Courses;
};

export type CourseModals = {
  feedbackModal: boolean;
  enrollModal: boolean;
  editModal: boolean;
  studentsModal: boolean;
  deleteModal: boolean;
  selectedCourse: Course;
}

// ========== INITIAL STATES ==========
export const initialOneFeedbackState = {
  id: 0,
  name: '',
  email: '',
  message: '',
  flagged: false,
};

export const initialAllFeedbackState = [initialOneFeedbackState];

export const initialCourseState = {
  id: 0,
  name: '',
  resource: '',
  fee: 0,
  description: '',
  feedback: initialAllFeedbackState,
};

export const initialCoursesState = [initialCourseState];

export const initialAddressState = {
  id: 0,
  city: '',
  street: '',
};

export const initialUserState = {
  id: 0,
  type: '',
  firstName: '',
  lastName: '',
  registrationDate: new Date(),
  phone: '',
  photo: '',
  email: '',
  password: '',
  address: initialAddressState,
  courses: initialCoursesState,
};

export const initialAllUsersState = [initialUserState];

export const initialModalsState = {
  feedbackModal: false,
  enrollModal: false,
  editModal: false,
  studentsModal: false,
  deleteModal: false,
  selectedCourse: initialCourseState
};