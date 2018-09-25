import React from 'react';

class AddNewAuthor extends React.Component {

    state = {
        name: "",
        jobTitle: "",
        bio: ""
    }

    render(){

        const { addNewAuthor } = this.props;
        const { name, jobTitle, bio } = this.state;

        return (
            <div className="add-new-book">
            {/* this is the same AddNewBook className to apply it's styles on AddNewAuthor component */}
                <h2>Add new Author</h2>

                <div className="new-book-form">
                    <label><span>Name</span>
                        <input type="text" onChange={event => this.setState({ name: event.target.value })} />
                    </label>

                    <label><span>Job title</span>
                        <input type="text" onChange={event => this.setState({ jobTitle: event.target.value })}/>
                    </label>


                    <div className="description-area">
                        <label><span>Bio</span>
                            <textarea onChange={event => this.setState({ bio: event.target.value })}></textarea>
                        </label>
                    </div>


                    <div className="btns">
                        <button className="save-btn" onClick={() => addNewAuthor(name, jobTitle, bio)}>Save</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default AddNewAuthor;