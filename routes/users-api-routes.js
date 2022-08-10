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
      console.log(req.body);
      await db.User.create({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
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
      const showusers = await db.User.findAll({});
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
  app.put("/api/user/update", async (req, res) => {
    try {
      const updateuser = await db.User.update(
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
