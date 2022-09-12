import express from 'express';
import router from './route';
import db from './models';
const app = express();

require('dotenv').config();

app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT, function() {
  console.log('listening on ' + process.env.PORT);
});
