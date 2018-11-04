import React from 'react';
import BooksInfo from './BooksInfo';
import PropTypes from "prop-types";

function BookShelfs(props) {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
                  {props.books.map((book) => (
                       <li key={book.id}>
                           <BooksInfo
                               bookInfo={book}
                               changeShelf = {props.changeShelf}
                           />
                       </li>
                   ))}
              </ol>
          </div>
        </div>
    )
}

BookShelfs.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default BookShelfs
