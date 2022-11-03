const express = require("express");
const bodyParser = require("body-parser");
const route = require("../src/route/route");
const mongoose = require("mongoose");
const aws = require("aws-sdk")
const multer = require("multer")
const app = express();

app.use(bodyParser.json());
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://bidyut10:kabir34268@cluster0.rw6eu.mongodb.net/CartManagement?retryWrites=true&w=majority",
    { useNewUrlParser: true }).then(() => console.log("MongoDb is connected")).catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app is running on " + " " + (process.env.PORT || 3000));
});