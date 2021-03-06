import React from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from "../../Global/Grid";

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h1>Search Results</h1>
                </div>
            </div>
        </div>
    ) : (
            <div className="card border-0">
                <div className="card-body player p-3">
                    <div className="article">
                        <h1>Search Results</h1>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item p-5 m-2">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id} >
                                        {/* col-3 show image of the book */}
                                        <Col size="2" className="bookImage">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="bookInfo">
                                            <Row>
                                                <h3 className=" bookTitle">{book.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className=" bookAuthor">{book.authors}</h4>
                                            </Row>
                                            <Row>
                                                <p className=" bookDescription">{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveBook btn btn-dark mr-3" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="example" rel="noopener">
                                        <button className="viewBook btn btn-light border">
                                                View Book
                                        </button>
                                        </a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult
