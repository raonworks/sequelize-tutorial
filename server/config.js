import dotenv from 'dotenv';

const env = dotenv.config();
if (env.error) {
  throw new Error("coouldn't find .env file!");
}

export default {
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dialect: 'mysql',
  port: process.env.MYSQL_PORT
};
