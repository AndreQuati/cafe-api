const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/cafeDB", {useNewUrlParser:true, useUnifiedTopology:true});

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(express.static("public"));

// Routes
const coffeesRouter = require("./routes/coffees");
app.use("/coffees", coffeesRouter);

// Setting up CORS
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELTE");
    app.use(cors());
    next();
})

// Starting the server
app.listen(4000, function(){
    console.log("Server started on port 4000");
});