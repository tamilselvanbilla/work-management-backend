const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config({ path: path.join(__dirname, ".env") });



const app = express();
const port = process.env.PORT;

process.setMaxListeners(0);
process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception Error", error);
});
process.on("unhandledRejection", (error) => {
    console.log("Unhandled Rejection Error", error);
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    retryWrites: false
});
mongoose.connection.once("open", (res) => {
    console.log("Connection Done!");
});
mongoose.connection.on("error", (error) => {
    console.log(("Connection Error!", error));
});

//create a cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// Authentication Paths
require("./src/routes/auth.route")(app);

// Public media access
app.use(express.static(__dirname + '/view/interview/'));

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/view/interview/', 'index.html'));
});

// Server listning
app.listen(port, () => {
    console.log("Listening Port", port);
});