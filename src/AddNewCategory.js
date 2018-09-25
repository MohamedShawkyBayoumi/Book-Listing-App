import React from 'react';

class AddNewCategory extends React.Component {
    render(){
        return (
            <div className="add-new-book">
            {/* this is the same AddNewBook className to apply it's styles on AddNewAuthor component */}
                <h2>Add new Category</h2>

                <div className="new-book-form">
                    <label><span>Name</span>
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

export default AddNewCategory;