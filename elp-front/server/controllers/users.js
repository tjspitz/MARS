const axios = require('axios');
const baseURL = process.env.BACKEND;
const getOptions = {
  method: 'GET',
  baseURL,
  url: '/users',
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
const byNameStub = '/name?name=';

module.exports = {
  getUsers: (req, res) => {
    const config = { ...getOptions };
    axios(config)
    .then(({ data }) => res.status(200).send(data))
    .catch((e) => {
      console.error(e);
      res.sendStatus(400);
    });
  },
  getUserById: (req, res) => {
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
  getUserLastByName: (req, res) => {
    const { name } = req.query;
    const config = {
      ...getOptions,
      url: getOptions.url + byNameStub + name
    };
    axios(config)
    .then(({ data }) => res.status(200).send(data))
    .catch((e) => {
      console.error(e);
      res.sendStatus(400);
    });
  },
  postUser: (req, res) => {
    const config = { ...postOptions };
    axios(config)
    .then(({ data }) => res.status(201).send(data))
    .catch((e) => {
      console.error(e);
      res.sendStatus(400);
    });
  },
  putUserById: (req, res) => {
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
  deleteUserById: (req, res) => {
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
