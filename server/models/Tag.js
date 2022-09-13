import { Model } from 'sequelize';

export default class Tag extends Model {
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
      },
      {
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Tag.belongsToMany(db.Post, { through: 'Post_Tag', foreignKey: 'TagId' });
  }

};
