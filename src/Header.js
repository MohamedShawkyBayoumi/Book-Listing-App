import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <header>
                <div className="logo">
                    <Link to="/">Book Listing</Link>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/book/new">New Book</Link></li>
                        <li><Link to="/author/new">New Author</Link></li>
                        <li><Link to="/category/new">New Category</Link></li>
                        <li className="edit-mode"><a href="#">Edit Mode</a></li>
                    </ul>
                </nav>
            </header>
        )
    };
}

export default Header