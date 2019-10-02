import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SearchHeader from "../components/SearchHeader";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import openSocket from 'socket.io-client';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'





const socket = openSocket('/');



class SearchBooks extends Component {

 
    
    state = {
      books: [],
      searchTerm:"",
      message:""
    };

    constructor() {
        super()
        this.sendSocketIO = this.sendSocketIO.bind(this);
        this.notify = this.notify.bind(this);
    }

   notify = () => toast(this.state.message)


    componentDidMount() {
        socket.on("Return book", data => {
            this.setState({message:data.title + " was just saved by a user"})
            if (this.state.message !== "") {
                this.notify()
                this.setState({message:""})
            }
            
        })
        socket.on("My book", data => {this.setState({message:"You just saved " + data.title }) 
        if (this.state.message !== "") {
            this.notify()
            this.setState({message:""})
        }
    })
    socket.on("Error", data => {this.setState({message: data.message }) 
    if (this.state.message !== "") {
        this.notify()
        this.setState({message:""})
    }
})
        
         
    }

    sendSocketIO(title) {
        socket.emit('Book saved', title);
        
    }    

   

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


   handleSearchSubmit = event => {
    event.preventDefault();
    
      API.searchBooks(this.state.searchTerm)
        .then(res => {
          if (res.data.items.length) {
            console.log("Items from google are " + JSON.stringify(res.data.items))
            let tempBooks =[]
            let bookThumb = ""
            
            for(let i=0; i< res.data.items.length; i++) {
              if(!res.data.items[i].volumeInfo.imageLinks) {
                bookThumb = "http://lgimages.s3.amazonaws.com/nc-md.gif"
              } else {
                bookThumb = res.data.items[i].volumeInfo.imageLinks.thumbnail
              }

             let  bookInfo= {"id":res.data.items[i].id,
                "title": res.data.items[i].volumeInfo.title || "No title available",
                         "authors":res.data.items[i].volumeInfo.authors || ["No author available"],
                         "description": res.data.items[i].volumeInfo.description || "No description available",
                         "image": bookThumb || "http://lgimages.s3.amazonaws.com/nc-md.gif",
                         "link":res.data.items[i].volumeInfo.infoLink || "No link available"

              }

              tempBooks.push(bookInfo)

              
            }

            console.log("Books going to state are " + JSON.stringify(tempBooks))
            this.setState({ books: tempBooks})

          }

        
          
          
          })
        .catch(err => console.log(err));
    
  };

   saveBook= bookData => {
   console.log("Save clicked " + JSON.stringify(bookData))

   

    
   
    
      API.saveBook({
          "title": bookData.title,
         "author":bookData.author,
          "description":bookData.description,
          "image":bookData.image,
          "link":bookData.link
      }).then(res => {console.log("Response was " + JSON.stringify(res))
        if (res) {
            this.sendSocketIO(bookData.title)
        }
    
    })
        .catch(err => {console.log(err)
            if (err)  {
                this.sendSocketIO("error")
            

            } 

        });
    
  };





    render() {
        return (
          <Container fluid>
              <ToastContainer />
            <Row>
              <Col size="md-12">
                <Jumbotron >
                

                 
                </Jumbotron>
               
              </Col>

              <Col size="md-12">
           <h3>Book Search</h3>
            <form>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                name="searchTerm"
                placeholder="Enter an author, title or subject to search"
              />
    
              <FormBtn
                
                onClick={this.handleSearchSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>

              <Col size="md-12 sm-12">
              
                {this.state.books.length ? (
                  <Row >
                      <h2 className="ml-2">Results</h2>
                    {this.state.books.map(book => (
                      <Row key={book.id} className="w-100">  

                      <SearchHeader  book={book} save={this.saveBook}>
                     
                     </SearchHeader>    
                      
                      <Card 
                      book={book}
                      >
                       
                        
                      </Card>
                      <span className="d-flex flex-row-reverse w-100 mr-5">
                 
                  
                  </span>
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
    
    export default SearchBooks;
    