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

        const { authors, books, categories, addNewCategory, addNewAuthor, addNewBook } = this.props;


        const { currentPage, booksPerPage } = this.props;

        // Logic for displaying todos
        //                          1       *       6
        const indexOfLastBook = currentPage * booksPerPage;
        //                              6          -    6
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        //                                      0               6
        const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
        //              [1, 2, 3, 4, 5, 6]
        const renderBooks = currentBooks.map(book => {
            //return <li key={index}>{todo}</li>;
            return (
            
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
            
            )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                className="page-item page-link"
                key={number}
                id={number}
                onClick={this.props.handleClick}
                >
                {number}
                </li>

                // <li
                // className="page-item"
                // key={number}
                // id={number}
                
                // ><a className="page-link" onClick={this.props.handleClick}>
                // {number}</a>
                // </li>
                
            );
        });

        return (
            <section className="body">
                {/*
                <BookDetails />
                */}
                
                {/* <Route exact path="/" render={() => (
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
                )}/> */}

                


                <Route exact path="/" render={() => (
                    <div>
                        <ul>
                        {renderBooks}
                        </ul>
                        {/* <ul id="page-numbers">
                        {renderPageNumbers}
                        </ul> */}

                        <div className="pagination-container">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    {/* <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    </li> */}
                                    {renderPageNumbers}
                                    {/* <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        

                    </div>
                )}/>

                <Route path="/book/new" render={() => (
                    <AddNewBook categories={categories} authors={authors} addNewBook={addNewBook} />
                )}/>
                
                <Route path="/author/new" render={() => (
                    <AddNewAuthor addNewAuthor={addNewAuthor} />
                )}/>
                
                <Route path="/category/new" render={() => (
                    <AddNewCategory addNewCategory={addNewCategory} categories={categories} />
                )}/>

                {books.map(book => (
                    <Route key={book.id} path={`/book/${book.id}`} render={() => (
                        <BookDetails book={book} />
                    )}/>
                ))}

                {authors.map(author => (
                    <Route key={author.id} path={`/author/${author.id}`} render={() => (
                        <SingleAuthor author={author} />
                    )}/>
                ))}


                {categories.map(category => (
                    <Route key={category.id} path={`/category/${category.id}`} render={() => (
                        <SingleCategory category={category} />
                    )}/>
                ))}
                
                
                
                

            </section>
        )
    };
}

export default Body;