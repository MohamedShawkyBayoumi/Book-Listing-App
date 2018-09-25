import React from 'react';

import BookDetails from './BookDetails';
import SingleAuthor from './SingleAuthor';
import SingleCategory from './SingleCategory';
import AddNewBook from './AddNewBook';
import AddNewAuthor from './AddNewAuthor';
import AddNewCategory from './AddNewCategory';

class Body extends React.Component {

    render(){

        const { authors, books, categories } = this.props;

        return (
            <section className="body">
                {/*
                <BookDetails />
                */}
                
                
                {books.map(book => (
                    <div key={book.id} className="book-article">
                        <div className="book-cover">
                            <img width="150px"  src={book.image} alt={book.title} />
                        </div>
                        <div className="book-description">
                            <h2>{book.title}</h2>
                            <p>
                                {book.description}
                            </p>
                        </div>
                    </div>
                ))}
                

            </section>
        )
    };
}

export default Body;