const axios = require('axios');
const baseURL = process.env.BACKEND;
const options = {
  method: 'GET',
  baseURL,
  url: '/courses',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

module.exports = {
  getAllCourses: (req, res) => {
    const config = { ...options };
    axios(config)
      .then(({ data }) => res.status(200).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(500);
      })
  },
  getCourseById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...options,
      url: options.url + `/id?id=${id}`,
    }
    axios(config)
    .then(({ data }) => res.status(200).send(data))
    .catch((e) => {
      console.error(e);
      res.sendStatus(500);
    })
  },
};
