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
  newParticipant: async (req, res) => {
    async (req, res) => {
      try {
        console.log(req.body);

        await db.Participant.create({
          user_id: req.body.user_id,
          friend_id: req.body.friend_id,
        });
        res.json(success);
      } catch (error) {
        res.json(error);
      }
    };
  },

  isAccepted: async (req, res) => {
    try {
      console.log("ive been hit");
      const acceptrequest = await db.Participant.update(
        {
          hasAccepted: true,
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
  },

  kickParticipant: async (req, res) => {
    try {
      console.log("ive been hit");
      const unfriend = await db.Participant.destroy({
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
  },

  iscoAdmin: async (req, res) => {
    try {
      console.log("ive been hit");
      const acceptrequest = await db.Participant.update(
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
