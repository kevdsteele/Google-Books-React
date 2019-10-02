import React from "react";
import "./index.css";


function SaveCard(props) {

    return (

    <div className="container-fluid ml-3">

    <div className="row w-100">

        <div className="col-12 mt-3">

            <div className="card ">

                <div className="card-horizontal">

                    <div className="img-square-wrapper">
                        <img className="book-img" src={props.book.image} alt="Card cap"/>
                    </div>

                    <div className="card-body">
                      
                        <p className="card-text">{props.book.description}</p>
                    </div>

                </div>

               

            </div>

        </div>

    </div>

</div>
    
    );
  }
  
  export default SaveCard;


