import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'graphql_db',
  username: 'postgres',
  password: 'password',
});

// class book extends Sequelize.Model {}
// book.init(
//   {
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//   },
//   {
//     sequelize,
//     modelName: 'book',
//   }
// );

const Book = sequelize.define('book',{
    title: DataTypes.STRING,
    author: DataTypes.STRING,
},{tableName:"data", timestamps: false})

// Synchronize models with the database
// (async () => {
//   await sequelize.sync({ alter: true }); // Use { force: true } to recreate tables
// })();

export default Book
