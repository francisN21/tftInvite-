const db = require("../models");

const {
  addUser,
  loadFriends,
  friendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  unfriend,
} = require("../controller/addfriend-controller");

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

  app.post("/api/friend/add", addUser);

  app.get("/api/friend/load_friends", loadFriends);

  app.get("/api/friend/friend_requests", friendRequest);

  app.put("/api/friend/accept_friend_requests", acceptFriendRequest);

  app.delete("/api/friend/reject_friend_requests", rejectFriendRequest);

  app.delete("/api/friend/unfriend", unfriend);
  // will add if needed
  //   app.update("/api/friend/", (req, res) => {
  //     console.log("ive been hit");
  //     res.json(characters);
  //   });
};
