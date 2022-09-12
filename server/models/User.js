import { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: true,
        },
        password: {
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
