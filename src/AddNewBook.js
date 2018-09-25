import React from 'react';

class AddNewBook extends React.Component {

    state = {
        title: "",
        category: "",
        author: "",
        description: "",
        isbn: "",
        pagesNumber: null,
        publishYear: "",
        imageURL: ""
    }


    render(){

        const { categories, authors, addNewBook } = this.props;
        const { title, category, author, description, isbn, pagesNumber, publishYear, imageURL } = this.state;

        return (
            <div className="add-new-book">
                <h2>Add new Book</h2>

                <div className="new-book-form">
                    <label><span>Title</span>
                        <input type="text" onChange={event => this.setState({ title: event.target.value })}/>
                    </label>

                    <div className="select-options">
                        <label><span>Category</span>
                            <select onChange={(event) => this.setState({ category: event.target.value })}>
                                <option>Select Category</option>
                                {categories.map(category => (
                                    <option
                                    key={category.id}
                                    value={category.name}
                                    >{category.name}</option>
                                ))}
                            </select>
                        </label>
                        <label><span>Author</span>
                            <select onChange={event => this.setState({ author: event.target.value })}>
                                <option>Select Author</option>
                                {authors.map(author => (
                                    <option
                                    key={author.id}
                                    value={author.name}
                                    >{author.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="description-area">
                        <label><span>Description</span>
                            <textarea onChange={event => this.setState({ description: event.target.value })}></textarea>
                        </label>
                    </div>

                    <label><span>ISBN</span>
                        <input type="text" onChange={event => this.setState({ isbn: event.target.value })}/>
                    </label>

                    <div className="numeric-inputs">
                        <label className="num-label"><span>No. of pages</span>
                            <input type="number" onChange={event => this.setState({ pagesNumber: event.target.value })}/>
                        </label>
                        <label><span>Year published</span>
                            <input type="text" onChange={event => this.setState({ publishYear: event.target.value })}/>
                        </label>
                    </div>

                    <label><span>Image URL</span>
                        <input type="text" onChange={event => this.setState({ imageURL: event.target.value })}/>
                    </label>

                    <div className="btns">
                        <button
                        className="save-btn"
                        onClick={() => addNewBook(title, category, author, description, isbn, pagesNumber, publishYear, imageURL)}
                        >Save</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default AddNewBook;