import { fetcher } from './api';
const getOptions = {
  method: 'GET',
  url: '/courses',
  data: undefined,
  json: true,
};
const postOptions = {
  ...getOptions,
  method: 'POST'
};
const putOptions = {
  ...getOptions,
  method: 'PUT'
};
const deleteOptions = {
  ...getOptions,
  method: 'DELETE'
};
const byIdStub = '/id?id=';

export const getAllCourses = () => {
  return fetcher({ ...getOptions });
};
export const getCourseById = (id) => {
  return fetcher({ ...getOptions, url: getOptions.url + byIdStub + id });
};
export const postCourse = (course) => {
  return fetcher({ ...postCourseOptions, data: course });
};
export const putCourseById = (update, id) => {
  return fetcher({
    ...putOptions,
    url: putOptions.url + byIdStub + id,
    data: update,
    json: false,
  })
};
export const putUserInCourseById = (userId, courseId) => {
  return fetcher({
    ...putOptions,
    url: putOptions.url + `/enroll?userId=${userId}&courseId=${courseId}`,
    json: false,
  })
};
export const deleteCourseById = (id) => {
  return fetcher({
    ...deleteOptions,
    url: deleteOptions.url + byIdStub,
    json: false,
  })
};
