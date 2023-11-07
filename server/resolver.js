import Book from '../config/db.js';
import { Op } from 'sequelize';

export const resolvers = {

  
    Query: {
        books: async () => {
            const books = await Book.findAll();
            return books;   
        },
        
        // searchListings: async (_, { SearchInput }) => {
        //   const filter = {};
    
        //   if (SearchInput.title) {
        //     filter.title = SearchInput.title;
        //   }
        //   if (SearchInput.genre) {
        //     filter.genre = SearchInput.genre;
        //   }
    
        //   // Use Sequelize's findAll method with the filter
        //   const filteredBooks = await Book.findAll({
        //     where: filter,
        //   });
    
        //   return filteredBooks;
        // },

        searchBook: async (_, { searchInput }) => {
          try {
            const filteredBooks = await Book.findAll({
              where: {
                title: {
                  [Op.iLike]: `%${searchInput}%`,
                },
              },
            });
            return filteredBooks;
          } catch (error) {
            throw new Error('Failed to retrieve books: ' + error);
          }
        }
            }

    };

