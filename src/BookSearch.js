import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksInfo from './BooksInfo';

class BookSearch extends Component {

    static propTypes = {
        changeShelf: PropTypes.func.isRequired
    };

    state = {
        books: [],
        query: ''
    };

    updateQuery = (query) => {
        this.setState({ query })
        this.searchBooks(query)
    }

    searchBooks = (query) => {
        if(query.length !== 0) {
            BooksAPI.search(query, 20).then(books => {
                this.setState({ books })
            })
        } else {
            this.setState({books: []})
        }
    }

    render() {
        const {query , books} = this.state;

        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                      type="text"
                      placeholder="Search by title or author"
                      value={query}
                      onChange={(event) => this.updateQuery(event.target.value)}
                  />
                </div>
              </div>
              <div className="search-books-results">
                {books.length > 0 && (
                    <ol className="books-grid">
                        {books.map((book, index) => (
                             <li key={book.id}>
                                 <BooksInfo
                                     key={index}
                                     bookInfo={book}
                                     changeShelf = {this.props.changeShelf}
                                 />
                             </li>
                         ))}
                     </ol>
                )}
                {books.error && (
                    <span>Search did not return any books. Please try again!</span>
                )}
                </div>
              </div>
        )
    }
}

export default BookSearch
