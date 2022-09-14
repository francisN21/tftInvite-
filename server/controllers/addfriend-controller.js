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
        id: req.body.id,
        user_id: req.body.user_id,
      });
      res.json(success);
    } catch (error) {
      res.json(error + errormssg);
    }
  },

  loadFriends: async (req, res) => {
    try {
      console.log(req.body.user_id);
      const showfriends = await db.Friend.findAll({
        where: { user_id: req.body.user_id, isFriend: true },
        where: { friend_id: req.body.user_id, isFriend: true },
      });
      res.json(showfriends);
    } catch (error) {
      res.json(errormssg);
    }
  },

  friendRequest: async (req, res) => {
    try {
      console.log("ive been hit");
      const showfriendreq = await db.Friend.findAll({
        where: { user_id: req.body.id, isFriend: false },
      });
      res.json(showfriendreq);
    } catch (error) {
      res.json(errormssg);
    }
  },

  acceptFriendRequest: async (req, res) => {
    try {
      console.log("ive been hit");
      const acceptrequest = await db.Friend.update(
        {
          isFriend: true,
        },
        {
          where: {
            user_id: req.body.user_id,
            friend_id: req.body.friend_id,
          },
        }
      );
      // res.send(`acceptrequest ${req.body.user_id}`);
      res.json(acceptrequest);
    } catch (error) {
      res.json(errormssg);
    }
  },

  rejectFriendRequest: async (req, res) => {
    try {
      console.log("ive been hit");
      const deleterequest = await db.Friend.destroy({
        where: {
          user_id: req.body.user_id,
          friend_id: req.body.friend_id,
        },
      });
      res.json(deleterequest);
    } catch (error) {
      res.json(errormssg);
    }
  },

  unfriend: async (req, res) => {
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
  },
};
