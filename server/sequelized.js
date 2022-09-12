import config from './config';
import Sequelize from 'sequelize';

export default new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
