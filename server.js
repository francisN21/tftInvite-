const express = require("express");
const app = express();
// const session = require("express-session");
// const path = require("path");

const friendlyRouter = require("./routes/addfriend-api-routes.js");
const users = require("./routes/users-api-routes.js");
const group = require("./routes/group-api-routes.js");
const participant = require("./routes/participant-api-routes.js");

require("dotenv").config();
const PORT = process.env.PORT || 5050;

const db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// needs the JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// console.log(process.env.PASSWORD);

// Invoke routes
friendlyRouter(app);
users(app);
group(app);
participant(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Listening on port https://localhost:${PORT}`)
  );
});
