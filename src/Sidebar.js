import React from 'react';

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
                        {authors.map(category => (
                                <li key={category.id}><a href="#">{category.name}</a></li>    
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>
        )
    };
}

export default Sidebar;