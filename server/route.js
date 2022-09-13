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
  res.send('completed');
});

router.get('/user', async (req, res) => {
  const user = await controller.getUser();
  res.send(user);
});

router.get('/users', async (req, res) => {
  const users = await controller.getUsers();
  users.forEach(async user => {
    //console.log((await user.getUserInfo()).id);
    const user_info = await user.getUserInfo();
    console.log(user_info.id);
  });
  res.send(users);
});

module.exports = router;
