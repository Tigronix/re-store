import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  return (
    <BookList books={[
      {
        id: 1,
        title: 'Product Ready Microservices',
        author: 'Susan J. Fowler'
      },
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard'
      }
    ]}></BookList>
  );
};

export default HomePage;