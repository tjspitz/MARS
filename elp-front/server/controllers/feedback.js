const axios = require('axios');
const baseURL = process.env.BACKEND;
const getOptions = {
  method: 'GET',
  baseURL,
  url: '/courses/feedback',
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
  getAllFeedback: (req, res) => {
    const config = {
      ...getOptions
    };
    axios(config)
      .then(({ data }) => res.status(200).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      });
  },
  getFeedbackById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...getOptions,
      url: getOptions.url + byIdStub + id
    };
    axios(config)
      .then(({ data }) => res.status(200).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      });
  },
  postFeedbackByCourseId: (req, res) => {
    const { id } = req.query;
    const config = {
      ...postOptions,
      url: postOptions + byIdStub + id
    };
    axios(config)
      .then(({ data }) => res.status(200).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      });
  },
  putFeedbackById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...putOptions,
      url: putOptions.url + byIdStub + id
    };
    axios(config)
      .then(({ data }) => res.status(200).send(data))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      });
  },
  deleteFeedbackById: (req, res) => {
    const { id } = req.query;
    const config = {
      ...deleteOptions,
      url: deleteOptions.url + byIdStub + id
    };
    axios(config)
      .then(() => res.sendStatus(204))
      .catch((e) => {
        console.error(e);
        res.sendStatus(400);
      });
  }
};
