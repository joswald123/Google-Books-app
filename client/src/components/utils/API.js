import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    getAllBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function(id) {
        return axios.get("/api/books" + id);
    },

    saveBook: function(saveBook) {
        return axios.post("/api/books", saveBook);
    },

    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    }
}