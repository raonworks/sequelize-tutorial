import express from 'express';
import models from './models';
import controller from './controller';

models.sequelize.sync();

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('home');
});

router.get('/test', async (req, res) => {
  // models.User.findOne({
  //   where: { id: 7 }
  // })
  // .then(user => { return user.getPosts() })
  // .then(posts => { console.log(posts) });

  // models.User.findOne({
  //   where: { id: 7 },
  //   include: [models.Post]
  // })
  // .then(user => { console.log(user) });

  models.Post.findOne({
    where: { id: 3 }
  })
  .then(post => { return post.getTags() })
  .then(tags => console.log(tags));

  res.send('test');
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
