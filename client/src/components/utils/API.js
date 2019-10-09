import axios from "axios";

export default {

    // Get New Books
    getBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Get all Saved Books
    getAllBooks: function() {
        return axios.get("/api/books");
    },

    // Get Books by Id
    getBook: function(id) {
        return axios.get("/api/books" + id);
    },

    // Saves a Book to the database
    saveBook: function(saveBook) {
        return axios.post("/api/books", saveBook);
    },

    // Deletes the Book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}