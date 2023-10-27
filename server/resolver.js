import Book from '../config/db.js';

export const resolvers = {
    Query: {
        books: async () => {
            const books = await Book.findAll();
            return books;
        }
    }
};
