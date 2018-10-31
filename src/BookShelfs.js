import React, { Component } from 'react';
import BooksInfo from './BooksInfo';
import PropTypes from "prop-types";

class BookShelfs extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    };

    render() {
        return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                      <ol className="books-grid">
                          {this.props.books.map((book) => (
                               <li key={book.id}>
                                   <BooksInfo
                                       bookInfo={book}
                                       changeShelf = {this.props.changeShelf}
                                   />
                               </li>
                           ))}
                      </ol>
                  </div>
                </div>
        )
    }
}

export default BookShelfs
