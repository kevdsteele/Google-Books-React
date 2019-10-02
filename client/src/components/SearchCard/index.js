import React from "react";
import "./index.css";


function SearchCard(props) {

    return (

    <div className="container-fluid ml-3">

    <div className="row w-100">

        <div className="col-12 mt-3">

            <div className="card ">

                <div className="card-horizontal">

                    <div className="img-square-wrapper">
                        <img className="book-img" src={props.book.volumeInfo.imageLinks.smallThumbnail} alt="Card cap"/>
                    </div>

                    <div className="card-body">
                      
                        <p className="card-text">{props.book.volumeInfo.description}</p>
                    </div>

                </div>

               

            </div>

        </div>

    </div>

</div>
    
    );
  }
  
  export default SearchCard;


