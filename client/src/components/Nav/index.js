import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
     <Link to="/">
     <img className="nav-image mr-5" src='images/google-book.png' alt="google books" />
    </Link>

    <Link to="/" className="nav-item text-success mr-3">
     Search
    </Link>

    <Link to="/books" className="nav-item">
     Saved Books
    </Link>

    </nav>
  );
}

export default Nav;
