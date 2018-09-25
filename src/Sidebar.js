import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render(){

        const { categories, authors } = this.props;
        
        return (
            <section className="sidebar">
                <aside>
                    <div>
                        <h3>Categories</h3>
                        <ul>
                            
                            {categories.map(category => (
                                <li key={category.id}><a href="#">{category.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <aside>
                    <div>
                        <h3>Authors</h3>
                        <ul>
                        {authors.map(author => (
                                <li key={author.id}><Link to={`/author/${author.id}`}>{author.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>
        )
    };
}

export default Sidebar;