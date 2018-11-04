import React from 'react';
import BookShelfs from './BookShelfs';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
      this.getBookOnShelf();
  }

  bookPerShelfs(shelfId) {
      return this.state.books.filter((b) => b.shelf === shelfId)
  }

  changeShelf = (book, newShelf) => {
      BooksAPI.update(book, newShelf).then((response) => {
          this.getBookOnShelf();
      })
    }

    getBookOnShelf() {
        BooksAPI.getAll().then((data) => {
            this.setState({ books: data })
        })
    }

  render() {

    return (
      <div className="app">
        <Route path='/search' render={() => (
            <BookSearch
                books={this.state.books}
                changeShelf={this.changeShelf}
             />
        )}/>

        <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                  <div>
                  <BookShelfs
                      title="Currently Reading"
                      books={this.bookPerShelfs("currentlyReading")}
                      changeShelf={this.changeShelf}
                  />
                  <BookShelfs
                      title="Want To Read"
                      books={this.bookPerShelfs("wantToRead")}
                      changeShelf={this.changeShelf}
                  />
                  <BookShelfs
                      title="Read"
                      books={this.bookPerShelfs("read")}
                      changeShelf={this.changeShelf}
                  />
                  </div>

              </div>
              <div className="open-search">
                <Link
                      to = '/search'>
                      Add a book
                </Link>
              </div>
            </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
