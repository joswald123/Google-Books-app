import React, { Component } from 'react';
import API from "../../utils/API";
import { Container, Row, Col } from "../../Global/Grid";
import SearchResult from "../../Global/SearchResult";
import SearchForm from "../../Global/SearchForm";



class Home extends Component {
    state ={
        search: "",
        books: [],
        error: "",
        message: ""
        
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }
    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                   
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                            
                        }
                        return result;
                       
                        
                    })
                    
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" })
                   
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
       
        event.preventDefault();
        let savedBooks = this.state.books.filter (book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }   
    render() {
        return (
            <Container fluid>
            <Container>
                <Row>
                    <Col size="12">
                        <SearchForm
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                        />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container>
                <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
            </Container>
        </Container>
        );
    }
}

export default Home;