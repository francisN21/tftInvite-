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
  createGroup: async (req, res) => {
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
  },

  addParticipants: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  removeParticipant: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  isPrivate: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  isCompleted: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  deleteGroup: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },
};
