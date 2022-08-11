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
  const errormssg = [
    {
      msg: "error",
      status: 400,
      data: {
        active: true,
      },
    },
  ];

  app.post("/api/friend/add", async(req, res) => {
    try {
      console.log(req.body);

      await db.Friend.create({
        user_id: req.body.user_id,
        friend_id: req.body.friend_id
      })
      res.json(success);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/api/friend/load_friends", async(req, res) => {
    try {
      console.log("ive been hit");
      await db.Friend.findAll({
        where: {}
      })
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  });
  app.get("/api/friend/friend_requests", async(req, res) => {
    try {
      console.log("ive been hit");
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  });
  app.delete("/api/friend/unfriend", async(req, res) => {
    try {
      console.log("ive been hit");
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  });

  // will add if needed
  //   app.update("/api/friend/", (req, res) => {
  //     console.log("ive been hit");
  //     res.json(characters);
  //   });
};
