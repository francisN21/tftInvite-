const db = require("../models");

module.exports = (app) => {
  const success = [
    {
      msg: "success",
      status: 200,
      data: {
        active: true,
      },
    },
  ];
  const error = [
    {
      msg: "error",
      status: 400,
      data: {
        active: true,
      },
    },
  ];
  app.post("/api/user/new", async (req, res) => {
    try {
      const createUser = req.body;
      console.log(req.body);
      await db.Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      //   await db.Users.create({ createUser });
      res.json(success);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  });
  app.get("/api/user/show", async (req, res) => {
    try {
      const createUser = req.body;
      const showusers = await db.Users.findAll({});

      res.json(showusers);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  });
};
