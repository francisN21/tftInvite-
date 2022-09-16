const db = require("../models");
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

//
module.exports = {
  createUser: async (req, res) => {
    async (req, res) => {
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
    };
  },

  isFriend: async (req, res) => {
    try {
      const showusers = await db.User.findAll({});
      res.json(showusers);
    } catch (err) {
      console.log("lol");
      res.json(err);
    }
  },

  showFriendReq: async (req, res) => {
    try {
      const showusers = await db.User.findAll({
        where: { user_id: req.body.user_id },
      });
      res.json(showusers);
    } catch (err) {
      console.log("lol");
      res.json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deleteusers = await db.User.destroy({
        where: { user_id: req.params.user_id },
      });
      res.json(deleteusers);
    } catch (err) {
      console.log("lol");
      res.json(error);
    }
  },

  updateUser: async (req, res) => {
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
  },

  placeHolder: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },
};
