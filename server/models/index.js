'use strict';

import config from '../config';
import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

const db = {};
const basename = path.basename(__filename);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
.filter(file => {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
})
.forEach(file => {
  console.log(file);
  const modelClass = require(path.join(__dirname, file)).default;
  const model = modelClass.init(sequelize, Sequelize.DataTypes);
  db[modelClass.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
