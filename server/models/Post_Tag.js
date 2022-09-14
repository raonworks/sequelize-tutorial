import { Model } from 'sequelize';

export default class Post_Tag extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        // id: {
        //   type: DataTypes.INTEGER,
        //   primaryKey: true,
        //   autoIncrement: true,
        //   allowNull: false,
        // },
        // PostId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        // },
        // TagId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        // },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'post_tag',
        createdAt: false,
        updatedAt: false
      }
    );
  }

  // static associate(db) {
  //   //db.Post_Tag.belongsToMany(db.Tag, { through: 'Post_Tag', foreignKey: 'PostId' });
  // }

};
