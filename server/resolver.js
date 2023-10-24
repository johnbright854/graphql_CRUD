import books from './dataSet.js';

export const resolvers = {
    Query: {
        books: () => books,
    }
}

