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
  addUser: async (req, res) => {
    try {
      console.log(req.body);

      await db.Friend.create({
        user_id: req.body.user_id,
        friend_id: req.body.friend_id,
      });
      res.json(success);
    } catch (error) {
      res.json(error + errormssg);
    }
  },

  getUserLogs: async (req, res) => {
    try {
      res.json(await Log.find({ authorId: req.user }));
    } catch (err) {
      res.send(err);
    }
  },

  findLog: async (req, res) => {
    try {
      res.json(await Log.findOne({ _id: req.params.id }));
    } catch (err) {
      res.send(err);
    }
  },

  deleteLog: async (req, res) => {
    try {
      res.json(await Log.findByIdAndDelete(req.params.logid));
    } catch (err) {
      res.send(err);
    }
  },

  editLog: async (req, res) => {
    try {
      res.json(
        await Log.findByIdAndUpdate(req.body._id, { text: req.body.text })
      );
    } catch (err) {
      res.send(err);
    }
  },
};
