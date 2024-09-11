require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('../router/index'); // Adjust path if needed

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).send('Server started on Vercel');
});

// Export the app for Vercel serverless function
module.exports = app;
