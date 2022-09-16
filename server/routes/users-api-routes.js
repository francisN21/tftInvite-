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
  app.post("/api/user/new", createUser);
  // checks if the friend request is accepted(isMutal = true)
  app.get("/api/user/isFriend", isFriend);
  // checks all friend requests (isMutual = false)
  app.get("/api/user/friendrequest", showFriendReq);
  // delete account / just for testing delete
  app.delete("/api/user/:user_id", deleteUser);
  // updates username for the moment
  app.put("/api/user/update", updateUser);

  // ======= Notes++ ======= //
  // Need to create routes for showing groups created and groups that the user is invited for groups
  // Need to show assigned tasks from groups
};
