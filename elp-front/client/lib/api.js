import axios from "axios";
const baseURL = 'http://localhost:8080/api/';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
export const fetcher = ({ method, url, data, json }) => {
  const config = {
    method,
    baseURL,
    url,
    data,
    headers,
  };
  return axios(config)
    .then(({ data }) => json ?  data : null)
    .catch((e) => console.error(e));
};
