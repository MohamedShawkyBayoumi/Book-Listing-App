import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <header>
                <div className="logo">
                    <a href="#">Book Listing</a>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">New Book</a></li>
                        <li><a href="#">New Author</a></li>
                        <li><a href="#">New Category</a></li>
                        <li className="edit-mode"><a href="#">Edit Mode</a></li>
                    </ul>
                </nav>
            </header>
        )
    };
}

export default Header