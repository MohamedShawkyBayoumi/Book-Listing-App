import React from 'react';

class AddNewBook extends React.Component {
    render(){
        return (
            <div className="add-new-book">
                <h2>Add new Book</h2>

                <div className="new-book-form">
                    <label><span>Title</span>
                        <input type="text" />
                    </label>

                    <div className="select-options">
                        <label><span>Category</span>
                            <select>
                                <option>Select Category</option>
                            </select>
                        </label>
                        <label><span>Author</span>
                            <select>
                                <option>Select Author</option>
                            </select>
                        </label>
                    </div>

                    <div className="description-area">
                        <label><span>Description</span>
                            <textarea></textarea>
                        </label>
                    </div>

                    <label><span>ISBN</span>
                        <input type="text" />
                    </label>

                    <div className="numeric-inputs">
                        <label className="num-label"><span>No. of pages</span>
                            <input type="number" />
                        </label>
                        <label><span>Year published</span>
                            <input type="text" />
                        </label>
                    </div>

                    <label><span>Image URL</span>
                        <input type="text" />
                    </label>

                    <div className="btns">
                        <button className="save-btn">Save</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default AddNewBook;