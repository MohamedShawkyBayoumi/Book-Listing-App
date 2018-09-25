import React from 'react';

class Sidebar extends React.Component {
    render(){
        return (
            <section className="sidebar">
                <aside>
                    <div>
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Category 1</a></li>
                            <li><a href="#">Category 2</a></li>
                            <li><a href="#">Category 3</a></li>
                            <li><a href="#">Category 4</a></li>
                        </ul>
                    </div>
                </aside>
                <aside>
                    <div>
                        <h3>Authors</h3>
                        <ul>
                            <li><a href="#">Author 1</a></li>
                            <li><a href="#">Author 2</a></li>
                            <li><a href="#">Author 3</a></li>
                            <li><a href="#">Author 4</a></li>
                        </ul>
                    </div>
                </aside>
            </section>
        )
    };
}

export default Sidebar;