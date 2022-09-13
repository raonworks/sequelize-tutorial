import models from "../models";

export default new class Controller {
  async addUser() {
    models.sequelize.transaction(async (transaction) => {
      const user = await models.User.create({
        name: 'kim, cheol-hong',
        email: 'guest@gmail.com',
        password: 'dev1234',
        UserInfo: {
          joomin_no: '750315-1551414',
          address: 'buchon-'
        }
      }, {
        transaction,
        include: [models.UserInfo]
      });

      return user;
    })
    .then(user => {
      user.createPost({
        title: 'notitle',
        content: 'nothing'
      });
    });
  }

  async getUser() {
    return models.User.findOne({
      attributes: ['id', 'name', 'email'],
      include: [
        { model: models.UserInfo }, 
        { model: models.Post }
      ]
    }).then(user => {
      return user;
    });
  }

  async getUsers() {
    return models.User.findAll()
    .then(users => { 
      return users;
    });
  }
};
