import React from 'react';

import BookDetails from './BookDetails';
import SingleAuthor from './SingleAuthor';
import SingleCategory from './SingleCategory';
import AddNewBook from './AddNewBook';
import AddNewAuthor from './AddNewAuthor';
import AddNewCategory from './AddNewCategory';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Body extends React.Component {

    render(){

        const { authors, books, categories } = this.props;

        return (
            <section className="body">
                {/*
                <BookDetails />
                */}
                
                <Route exact path="/" render={() => (
                    <div>
                        {books.map(book => (
                            <div key={book.id} className="book-article">
                                <div className="book-cover">
                                    <img width="150px"  src={book.image} alt={book.title} />
                                </div>
                                <div className="book-description">
                                    <h2><Link to={`/book/${book.id}`}>{book.title}</Link></h2>
                                    <p>
                                        {book.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}/>

                <Route path="/book/new" render={() => (
                    <AddNewBook />
                )}/>
                
                <Route path="/author/new" render={() => (
                    <AddNewAuthor />
                )}/>
                
                <Route path="/category/new" render={() => (
                    <AddNewCategory />
                )}/>

                {books.map(book => (
                    <Route key={book.id} path={`/book/${book.id}`} render={() => (
                        <BookDetails book={book} />
                    )}/>
                ))}
                

            </section>
        )
    };
}

export default Body;