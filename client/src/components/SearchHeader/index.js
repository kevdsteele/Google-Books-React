import React from "react";
import Button from "../Button";




function SearchHeader(props) {

    return (

    <div key={props.book.id} className="row card-header w-100 mt-3 ml-2">
      <div className="col-md-6">
      <h4 className="card-title">{props.book.title}</h4>
      <h5 className="d-inline-block pr-2">Written by </h5>
      {props.book.authors.map(author => (
      <h5  key={author} className="d-inline-block pr-2">{author}</h5>))} 
      </div>
      <div className="col-md-6 text-right pr-5">
      <a href={props.book.link} target="_blank" rel="noopener noreferrer"><Button className="btn btn-primary ml-2">View</Button></a>
        <Button className="btn btn-success" onClick={() => props.save({title:props.book.title,
                author:props.book.authors,description:props.book.description,image:props.book.image,link:props.book.link})}>Save</Button>
      </div>
       
    


    </div>
    
    );
  }
  
  export default SearchHeader;