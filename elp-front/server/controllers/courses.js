const axios = require('axios');
const baseURL = process.env.BACKEND;
const getOptions = {
  method: 'GET',
  baseURL,
  url: '/courses',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
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

module.exports = {
  getAllCourses: (req, res) => {
    const config = { ...getOptions };
    axios(config)
      .then(({ data }) => res.status(200).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      })
  },
  getCourseById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...getOptions,
      url: getOptions.url + byIdStub + id
    }
    axios(config)
    .then(({ data }) => res.status(200).send(data))
    .catch((e) => {
      console.error(e);
      res.sendStatus(400);
    });
  },
  postCourse: (req, res) => {
    const config = { ...postOptions };
    axios(config)
      .then(({ data }) => res.status(201).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      });
  },
  putCourseById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...putOptions,
      url: putOptions.url + byIdStub + id
    };
    axios(config)
      .then(() => res.sendStatus(200))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
    });
  },
  putUserInCourseById: (req, res) => {
    const { userId, courseId } = req.query;
    const config = {
      ...putOptions,
      url: putOptions.url + `/enroll?userId=${userId}&courseId=${courseId}`
    };
    axios(config)
      .then(() => res.sendStatus(200))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
    });
  },
  deleteCourseById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...deleteOptions,
      url: deleteOptions.url + byIdStub
    };
    axios(config)
    .then(() => res.sendStatus(204))
    .catch((e) => {
      console.error(e);
      res.sendStatus(400);
  });
  }
};
