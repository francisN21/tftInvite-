const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5050;

const db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// needs the JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(process.env.PASSWORD);

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Listening on port https://localhost:${PORT}`)
  );
});
