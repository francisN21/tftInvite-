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

  app.post("/api/goal/newgoal", async (req, res) => {
    try {
      console.log(req.body);

      await db.Goal.create({
        user_id: req.body.user_id,
        friend_id: req.body.friend_id,
      });
      res.json(success);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/api/group/change", async (req, res) => {
    try {
      console.log("ive been hit");
      const showfriends = await db.Friend.findAll({
        where: { user_id: req.body.user_id, isMutual: true },
      });
      res.json(showfriends);
    } catch (error) {
      res.json(errormssg);
    }
  });
  app.get("/api/group/friend_requests", async (req, res) => {
    try {
      console.log("ive been hit");
      const showfriendreq = await db.Friend.findAll({
        where: { friend_id: req.body.user_id, isMutual: false },
      }).then();
      res.json(showfriendreq);
    } catch (error) {
      res.json(errormssg);
    }
  });
  app.put("/api/group/accept_friend_requests", async (req, res) => {
    try {
      console.log("ive been hit");
      const acceptrequest = await db.Friend.update(
        {
          isMutual: true,
        },
        {
          where: {
            user_id: req.body.user_id,
            friend_id: req.body.friend_id,
          },
        }
      );
      res.json(acceptrequest);
    } catch (error) {
      res.json(errormssg);
    }
  });

  app.delete("/api/group/unfriend", async (req, res) => {
    try {
      console.log("ive been hit");
      const unfriend = await db.Friend.destroy({
        where: {
          user_id: req.body.user_id,
          friend_id: req.body.friend_id,
        },
      });
      res.json(unfriend);
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
