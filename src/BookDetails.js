import React from 'react';

class BookDetails extends React.Component {
    render(){

        const { book } = this.props;

        return (
            <div className="book-details">
                <div className="book-head">
                    <div className="book-description">
                        <h2>{book.title}</h2>

                        <p><span>By: </span>{book.author}</p>
                        <p><span>Number of Pages: </span>{book.pagesNumber}</p>
                        <p><span>Publish year: </span>{book.publishYear}</p>
                        <p><span>ISBN: </span>{book.isbn}</p>
                        <p><span>Classification: </span>{book.category}</p>
                    </div>
                    <div className="book-photo">
                        <img width="150px" height="150px" src={book.image} alt={book.title} />
                    </div>
                </div>
                <div className="book-paragraph">
                    <p>
                        {book.description}
                    </p>
                </div>
            </div>
        )
    };
}

export default BookDetails;