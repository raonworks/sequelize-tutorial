import express from 'express';
import db from './models';

db.sequelize.sync();

const router = express.Router();

router.get('/', function(req, res) {
  res.send('home');
});

router.get('/add', function(req, res) {
  res.send('add');
});

module.exports = router;
