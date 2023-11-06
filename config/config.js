

const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect:'mysql',
    url: process.env.DATABASE_URL,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect:'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};


const sequelize = new Sequelize({
 username:config.development.username,
  password:config.development.password,
  database:config.development.database,
  
    host: config.development.host,
    dialect:config.development.dialect,
    url:config.development.url
   
  
  
  });
module.exports= sequelize ;


//console.log(process.env.DB_DIALECT);

