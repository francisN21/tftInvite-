const express = require("express");
const PORT = 5050;
const app = express();
require('dotenv').config()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// needs the JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });