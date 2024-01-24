require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const router = require('./routes');
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`elp-front server listening at http://localhost:${PORT}`);
});