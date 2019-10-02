import React, { Component } from "react";

import SaveHeader from "../components/SaveHeader";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";



class SavedBooks extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
             
            </Jumbotron>
           
          </Col>
          <Col size="md-12 sm-12">
          
            {this.state.books.length ? (
              <Row>
                {this.state.books.map(book => (
                  <Row key={book._id}>
                    <SaveHeader book={book} delete={this.deleteBook}></SaveHeader>
                  <Card key={book._id } book={book}
                 
                      >

              
                  </Card>
                
                  </Row>
                ))}
                
                
              </Row>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedBooks;
