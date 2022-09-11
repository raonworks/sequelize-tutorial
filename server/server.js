const express = require('express');
const app = express();
const router = require('./route');

require('dotenv').config();

app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT, function() {
  console.log('listening on ' + process.env.PORT);
});
