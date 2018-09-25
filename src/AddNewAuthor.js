import React from 'react';

class AddNewAuthor extends React.Component {
    render(){
        return (
            <div className="add-new-book">
            {/* this is the same AddNewBook className to apply it's styles on AddNewAuthor component */}
                <h2>Add new Author</h2>

                <div className="new-book-form">
                    <label><span>Name</span>
                        <input type="text" />
                    </label>

                    <label><span>Job title</span>
                        <input type="text" />
                    </label>


                    <div className="description-area">
                        <label><span>Bio</span>
                            <textarea></textarea>
                        </label>
                    </div>


                    <div className="btns">
                        <button className="save-btn">Save</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default AddNewAuthor;