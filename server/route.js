import express from 'express';
import db from './models';

db.sequelize.sync();

const router = express.Router();

router.get('/', function(req, res) {
  res.send('home');
});

module.exports = router;
