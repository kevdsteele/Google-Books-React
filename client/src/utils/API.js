import axios from "axios";

export default {


  searchBooks: function (searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    
  },
  getBooks: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
