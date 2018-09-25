import React from 'react';

class SingleCategory extends React.Component {
    render(){

        const { category } = this.props;

        return (
            <div className="single-category">
                <h2>{category.name}</h2>

                <div className="book-article">
                    <div className="book-cover">
                        <img width="150px" height="150px" src="https://lorempixel.com/220/300/nature?id=ceb1138c-a247-43b5-8470-edcff6783bab" alt="" />
                    </div>
                    <div className="book-description">
                        <h2>Sample book title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Autem magnam non perferendis iure rem repellat dicta numquam veritatis,
                            eveniet officia quia expedita architecto dolorem fugiat corrupti natus fugit! Nihil, ab!
                        </p>
                    </div>
                </div>
            </div>
        )
    };
}

export default SingleCategory;