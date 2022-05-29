const http = require('http');
const mongoose = require('mongoose');
const Post = require('./models/post');
const dotenv = require('dotenv');
const { errorHandle, successHandle } = require('./resHandle');

dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('connect success!');
  })
  .catch((error) => {
    console.log('connect error!', error);
  });

const baseUrl = '/posts';

const method = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  OPTIONS: 'OPTIONS',
};
