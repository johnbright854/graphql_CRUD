import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_BOOKS = gql`
  query SearchBook($searchInput: String!) {
    searchBook(searchInput: $searchInput) {
      id
      title
      author
      genre
    }
  }
`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchBooks, { loading, error, data }] = useLazyQuery(GET_BOOKS);

  const handleSearch = () => {
    searchBooks({ variables: { searchInput } });
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.searchBook.length > 0 && (
        <ul>
          {data.searchBook.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      )}
      {data && data.searchBook.length === 0 && <p>No results found.</p>}
    </div>
  );
}

export default App;
