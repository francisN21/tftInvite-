const db = require("../models");

const {
  createGroup,
  addParticipants,
  removeParticipant,
  isPrivate,
  isCompleted,
  deleteGroup,
} = require("../controller/group-controller");

module.exports = (app) => {
  app.post("/api/group/create-group", createGroup);

  app.post("/api/group/add-participant", addParticipants);

  app.delete("/api/group/remove-participant", removeParticipant);

  app.put("/api/group/is-private", isPrivate);

  app.put("/api/group/is-completed", isCompleted);

  app.delete("/api/group/delete-group", deleteGroup);

  // will add if needed
  // app.update("/api/friend/", (req, res) => {
  //   try {
  //     res.json(success);
  //   } catch (error) {
  //     res.json(errormssg);
  //   }
  // });
};
