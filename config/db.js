import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  username: 'postgres',
  password: 'password',
});

const Book = sequelize.define('book',{
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
},{tableName:"book", timestamps: false,defaultScope: {
  attributes: { exclude: ['id']},
}
})

// const Book = sequelize.define('book', {
//   title: {
//     type: DataTypes.STRING,
//     field: 'title' // Define the field name explicitly
//   },
//   author: {
//     type: DataTypes.STRING,
//     field: 'author' // Define the field name explicitly
//   },
//   genre: {
//     type: DataTypes.STRING,
//     field: 'genre' // Define the field name explicitly
//   },
// }, {
//   tableName: 'book',
//   timestamps: false,
//   defaultScope: {
//     attributes: ['title'], // Define the attributes you want to select
//   },
// });


export default Book
