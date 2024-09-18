const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config;
const app = express();

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
  } catch (error) {
    console.log(`ERROR:${error}`);
  }
};
// ================
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
// ================

module.exports = connectdb;
