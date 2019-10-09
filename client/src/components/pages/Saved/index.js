import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../Global/Grid";
import SavedResult from "../../Global/SavedResult"

class SaveBook extends Component {
    state = {
        savedBooks: [],
        target: "",
        noResults: false
        
    };
   
    componentDidMount() {
        this.getSavedBooks();
      }
    
      getSavedBooks = () => {
        API.getAllBooks()
          .then(res => {
            if (res.data.length > 0) {
              this.setState({
                savedBooks: res.data,
                target: "_blank"
              });
            
            } else {
              this.setState({
                noResults: true
              });
            }
    
          })
          .catch(err => console.log(err));
      }

   

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
           
    }
    

    render() {
        return (
            <Container fluid className="container">
                <Container>
                    <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveBook;