import express from 'express';
import models from './models';
import controller from './controller';

models.sequelize.sync();

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('home');
});

router.get('/add', async (req, res) => {
  controller.addUser();
  res.send('added user');
});

router.get('/get', async (req, res) => {
  const tmp = models.User.findAll().then(users => { 
    return users;
   });

  const users = await tmp;
  users.forEach(async user => {
    const userInfo = await user.getUserInfo();
    console.log(userInfo);
  });

  res.send('findAll');
});

module.exports = router;
