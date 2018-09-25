import React from 'react';

class BookDetails extends React.Component {
    render(){
        return (
            <div className="book-details">
                <div className="book-head">
                    <div className="book-description">
                        <h2>Billion Dollar Whale</h2>

                        <p><span>By: </span>Patricia Hermiston</p>
                        <p><span>Number of Pages: </span>334</p>
                        <p><span>Publish year: </span>2005</p>
                        <p><span>ISBN: </span>1DFGDFG35DFG2DF66841D5FGDFGDFG185DF2G</p>
                        <p><span>Classification: </span>Category name</p>
                    </div>
                    <div className="book-photo">
                        <img width="150px" height="150px" src="https://lorempixel.com/220/300/nature?id=ceb1138c-a247-43b5-8470-edcff6783bab" alt="" />
                    </div>
                </div>
                <div className="book-paragraph">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem magnam non perferendis iure rem repellat dicta numquam veritatis,
                        eveniet officia quia expedita architecto dolorem fugiat corrupti natus fugit! Nihil, ab!
                    </p>
                </div>
            </div>
        )
    };
}

export default BookDetails;