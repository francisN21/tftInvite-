const db = require("../models");

const { addUser } = require("../controllers/logController");

const auth = {};

module.exports = (app) => {
  app.post("/", auth, addUser);
};
