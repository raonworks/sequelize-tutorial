import express from 'express';
import db from './models';
import controller from './controller';

db.sequelize.sync();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/add', (req, res) => {
  controller.addUser();
  res.send('added user');
});

module.exports = router;
