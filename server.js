// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require ("mongoose");
const routes=require ("./routes")

const PORT = process.env.PORT || 3005;
const app = express();

// Define middleware here
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes)

// Conect to mongoose 
mongoose.connect('mongodb://localhost/googlebooksapp', function(error){
   if(error){
      throw error; 
   }else{
      console.log('Conectado a MongoDB');
   }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });