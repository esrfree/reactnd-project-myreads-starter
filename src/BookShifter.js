import React from 'react';
import PropTypes from "prop-types";

function BookShifter(props) {

    const shelfShift = (event) => {
        props.changeShelf(props.book, event.target.value);
    };

    return (
        <div className="book-shelf-changer">
          <select
            defaultValue={props.book.shelf}
            onChange= {shelfShift}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    )
}

BookShifter.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
    }

export default BookShifter
