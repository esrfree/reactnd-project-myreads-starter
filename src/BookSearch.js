import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DebounceInput from 'react-debounce-input';
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
        let results = []
        if(query) {
            BooksAPI.search(query, 20).then(resp => {
                if (resp.length > 0) {
                    results = resp.map(r => {
                        const index = this.props.books.findIndex(b => b.id === r.id)
                        if (index >= 0) {
                            return this.props.books[index]
                        } else {
                            r.shelf = 'none'
                            return r
                        }
                    })
                }
                this.setState({ books:results })
            })
        } else {
            this.setState({books: []})
        }
    }

    render() {
        console.log(this.state.books)
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
                  <DebounceInput
                      type="text"
                      placeholder="Search by title or author"
                      value={query}
                      debounceTimeout={1000}
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
                {books.length === 0 && (
                    <span>Please enter a new search criteria!</span>
                )}
                </div>
              </div>
        )
    }
}

export default BookSearch
