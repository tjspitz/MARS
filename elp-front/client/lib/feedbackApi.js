import { fetcher } from './api';
const getOptions = {
  method: 'GET',
  url: '/courses/feedback',
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

export const getAllFeedback = () => {
  return fetcher({ ...getOptions });
};
export const getFeedbackById = (id) => {
  return fetcher({ ...getOptions, url: getOptions.url + byIdStub + id });
};
export const postFeedbackByCourseId = (feedback, courseId) => {
  return fetcher({
    ...postOptions,
    url: postOptions.url + '/id?courseId=' + courseId,
    data: feedback,
  });
};
export const putFeedbackById = (update, id) => {
  return fetcher({
    ...putOptions,
    url: putOptions.url + byIdStub + id,
    data: update,
    json: false,
  })
};
export const deleteFeedbackById = (id) => {
  return fetcher({
    ...deleteOptions,
    url: deleteOptions.url + byIdStub + id,
    json: false,
  })
};
