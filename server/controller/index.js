import Container from "typedi";

const sequelize = Container.get('sequelize');

export default new class Controller {
  async addUser() {
    const User = Container.get('User');
    const UserInfo = Container.get('UserInfo');
    sequelize.transaction(async (transaction) => {
      const user = await User.create({
        name: 'kim, cheol-hong',
        email: 'popodaddy@gmail.com',
        password: 'dev1234',
        UserInfo: {
          joomin_no: '750315-1551414',
          address: 'buchon-'
        }
      }, {
        transaction,
        include: [UserInfo]
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
};
