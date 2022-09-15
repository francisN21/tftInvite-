const db = require("../models");

const {
  newParticipant,
  isAccepted,
  kickParticipant,
  iscoAdmin,
} = require("../controller/participant-controller");

module.exports = (app) => {
  app.post("/api/participant/new-participant", newParticipant);

  app.put("/api/participant/is-accepted", isAccepted);

  app.delete("/api/participant/kick-participant", kickParticipant);

  app.put("/api/participant/is-coAdmin", iscoAdmin);

  // will add if needed
  // app.update("/api/friend/", (req, res) => {
  //   try {
  //     res.json(success);
  //   } catch (error) {
  //     res.json(errormssg);
  //   }
  // });
};
