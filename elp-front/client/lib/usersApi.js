import { fetcher } from './api';
const getOptions = {
  method: 'GET',
  url: '/users',
  data: undefined,
  json: true,
};
const postOptions = {
  ...getOptions,
  method: 'POST',
};
const putOptions = {
  ...getOptions,
  method: 'PUT',
};
const deleteOptions = {
  ...getOptions,
  method: 'DELETE',
};
const byIdStub = '/id?id=';
const byNameStub = '/name?name=';

export const getUsers = () => {
  return fetcher({ ...getOptions });
};
export const getUserById = (id) => {
  return fetcher({ ...getOptions, url: getOptions.url + byIdStub + id });
};
export const getUserLastByName = (name) => {
  return fetcher({ ...getOptions, url: getOptions.url + byNameStub + name });
};
export const postUser = (user) => {
  return fetcher({ ...postOptions, data: user });
};
export const putUserById = (update, id) => {
  return fetcher({
    ...putOptions,
    url: putOptions.url + byIdStub + id,
    data: update,
    json: false,
  });
};
export const deleteUserById = (id) => {
  return fetcher({
    ...deleteOptions,
    url: deleteOptions.url + byIdStub + id,
    json: false,
  });
};
