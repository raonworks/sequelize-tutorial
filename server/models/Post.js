import { Model } from 'sequelize';

export default class Post extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

};
