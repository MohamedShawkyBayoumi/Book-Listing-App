import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

import JSON from './json/books.json';


class App extends Component {

  state = {
    authors: [],
    books: [],
    categories: [],
    currentPage: 1,
    booksPerPage: 6
  }

  componentDidMount(){
    this.setState({
      authors: JSON.authors,
      books: JSON.books,
      categories: JSON.categories
    });

    
  };


  addNewCategory = (nameInput) => {
    //console.log(nameInput);
    const ID = Math.floor(Math.random() * 100 + 1);

    const newCategory = {
      id: ID,
      name: nameInput
    }
    this.setState((currentCategories) => {
      return {
        categories: currentCategories.categories.concat([newCategory])
      }
    })
  }

  addNewAuthor = (name, jobTitle, bio) => {

    const id = Math.floor(Math.random() * 100 + 1);

    const newAuthor = {
      id,
      name,
      jobTitle,
      bio
    }

    this.setState((currentAuthors) => {
      return {
        authors: currentAuthors.authors.concat([newAuthor])
      }
    })
  }


  addNewBook = (title, category, author, description, isbn, pagesNumber, publishYear, imageURL) => {
    

    const id = Math.floor(Math.random() * 100 + 1);

    const newBook = {
      id, title, category, author, description, isbn, pagesNumber, publishYear, imageURL
    }

    this.setState((currentBooks) => {
      return {
        books: currentBooks.books.concat([newBook])
      }
    });
  }


  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {

    

    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="main-wrapper">
          
            <Sidebar 
              categories={this.state.categories}
              authors={this.state.authors}
            />


            
            <Body
              books={this.state.books}
              authors={this.state.authors}
              categories={this.state.categories}
              addNewCategory={this.addNewCategory}
              addNewAuthor={this.addNewAuthor}
              addNewBook={this.addNewBook}
              currentPage={this.state.currentPage}
              booksPerPage={this.state.booksPerPage}
              handleClick={this.handleClick}
              />

          </div>
        </main>
      </div>
    );
  }
}

export default App;
