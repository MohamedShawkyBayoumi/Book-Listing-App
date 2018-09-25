import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

import JSON from './json/books.json';


class App extends Component {

  state = {
    authors: [],
    books: [],
    categories: []
  }

  componentDidMount(){
    this.setState({
      authors: JSON.authors,
      books: JSON.books,
      categories: JSON.categories
    });

    
  };


  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <div className="main-wrapper">
            <Sidebar />


            
            <Body
              authors={this.state.authors}
              books={this.state.books}
              categories={this.state.categories}
              />

          </div>
        </main>
      </div>
    );
  }
}

export default App;
