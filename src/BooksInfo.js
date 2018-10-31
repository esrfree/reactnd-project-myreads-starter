import React, { Component } from 'react'
import BookShifter from './BookShifter'
import PropTypes from "prop-types"

class BookInfo extends Component {
    static propTypes = {
        bookInfo: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { bookInfo } = this.props;
        return(
            <div className="book">
                <div className="book-top">
                   <div className="book-cover" style={{
                       width: 128,
                       height: 193,
                       backgroundImage: `url("${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : ''}")`
                     }}></div>
                        <BookShifter
                            book = {bookInfo}
                            changeShelf = {this.props.changeShelf}
                        />
                 </div>
                 <div className="book-title">{this.props.bookInfo.title}</div>
                 <div className="book-authors">{this.props.bookInfo.authors}</div>
            </div>
        )
    }
}

export default BookInfo
