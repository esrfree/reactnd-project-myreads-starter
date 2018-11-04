import React from 'react'
import BookShifter from './BookShifter'
import PropTypes from "prop-types"

function BookInfo(props) {
    return (
        <div className="book">
            <div className="book-top">
               <div className="book-cover" style={{
                   width: 128,
                   height: 193,
                   backgroundImage: `url("${props.bookInfo.imageLinks ? props.bookInfo.imageLinks.thumbnail : ''}")`
                 }}></div>
                    <BookShifter
                        book = {props.bookInfo}
                        changeShelf = {props.changeShelf}
                    />
             </div>
             <div className="book-title">{props.bookInfo.title}</div>
             <div className="book-authors">{props.bookInfo.authors}</div>
        </div>
    )
}

BookInfo.propTypes = {
    bookInfo: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
    }

export default BookInfo
