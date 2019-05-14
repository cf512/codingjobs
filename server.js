/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();
var cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// var index = require("./routes/index");

var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
app.use(cors(corsOption));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codingjobs", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
