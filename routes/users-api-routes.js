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
      const showusers = await db.Users.findAll({});
      res.json(showusers);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  });
  app.delete("/api/user/:user_id", async (req, res) => {
    try {
      const deleteusers = await db.Users.destroy({
        where: { user_id: req.params.user_id },
      });
      res.json(deleteusers);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  });
  app.put("/api/user/username", async (req, res) => {
    try {
      const updateuser = await db.Users.update(
        {
          username: req.body.username,
        },
        {
          where: { user_id: req.body.user_id },
        }
      );
      res.json(updateuser);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  });
};
