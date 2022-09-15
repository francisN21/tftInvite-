const db = require("../models");

const {
  createUser,
  isFriend,
  showFriendReq,
  deleteUser,
  updateUser,
} = require("../controller/user-controller");

module.exports = (app) => {
  // create user no auth yet
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
      res.json(err);
    }
  });
  // checks if the friend request is accepted(isMutal = true)
  app.get("/api/user/isFriend", async (req, res) => {
    try {
      const showusers = await db.User.findAll({});
      res.json(showusers);
    } catch (err) {
      console.log("lol");
      res.json(err);
    }
  });
  // checks all friend requests (isMutual = false)
  app.get("/api/user/friendrequest", async (req, res) => {
    try {
      const showusers = await db.User.findAll({
        where: { user_id: req.body.user_id },
      });
      res.json(showusers);
    } catch (err) {
      console.log("lol");
      res.json(err);
    }
  });
  // delete account / just for testing delete
  app.delete("/api/user/:user_id", async (req, res) => {
    try {
      const deleteusers = await db.User.destroy({
        where: { user_id: req.params.user_id },
      });
      res.json(deleteusers);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  });
  // updates username for the moment
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

  // ======= Notes++ ======= //
  // Need to create routes for showing groups created and groups that the user is invited for groups
  // Need to show assigned tasks from groups
};
