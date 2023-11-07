import  { gql }  from 'apollo-server';

export const typeDefs =  gql`
    type Book {
        id: ID
        title: String
        author: String
        genre: String
  }

  input SearchInput{
        title: String
        genre: String
  }
    type Query {
        searchListings(SearchInput: String!): [Book!]!
        searchBook(searchInput: String!): [Book]
        books: [Book]!
  }

`

