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
  newGoal: async (req, res) => {
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

  changeDate: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  isMet: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  updateText: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
    }
  },

  placeHolder: async (req, res) => {
    try {
      res.json(success);
    } catch (error) {
      res.json(errormssg);
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
