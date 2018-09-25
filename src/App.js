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
              
              />

          </div>
        </main>
      </div>
    );
  }
}

export default App;
