import { Model } from 'sequelize';

export default class UserInfo extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        joomin_no: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true
      }
    );
  }

  static associate(db) {
    db.UserInfo.belongsTo(db.User);
  }

};
