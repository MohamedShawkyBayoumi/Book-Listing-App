import React from 'react';

class AddNewCategory extends React.Component {

    state = {
        nameInput: ""
    }

    render(){

        const { addNewCategory, categories } = this.props;

        return (
            <div className="add-new-book">
            {/* this is the same AddNewBook className to apply it's styles on AddNewAuthor component */}
                <h2>Add new Category</h2>
                <div className="new-book-form">
                    <label><span>Name</span>
                        <input type="text" onChange={event => this.setState({ nameInput: event.target.value })}/>
                    </label>

                    <div className="btns">
                        <button className="save-btn" onClick={() => addNewCategory(this.state.nameInput)}>Save</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default AddNewCategory;