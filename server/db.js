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


export default Book
