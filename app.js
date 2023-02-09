const express = require("express");
const router = require("./src/route/api");

const app = new express();
const bodyParser = require("body-parser");

//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database
const mongoose = require("mongoose");

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(expressMongoSanitize());
app.use(xss());
app.use(hpp());

//Body perser
app.use(bodyParser.json());

//Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

//Mongo DB Database Connection
let URI =
  "mongodb+srv://<username>:<password>@cluster0.bglwbam.mongodb.net/CRUD?retryWrites=true&w=majority";
let OPTION = { user: "testuser123", pass: "testuser123", autoIndex: true };
mongoose.connect(URI, OPTION, (error) => {
  console.log("Connection Success");
  console.log(error);
});

//Managing Frontend Api Routing
// app.use(express.static("client/build"));
// app.get("*", function (req, res) {
//   req.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

//Managing Backend Api Routing
app.use("/api/v1", router);

module.exports = app;
