const db = require("../models");

const {
  newGoal,
  changeDate,
  isMet,
  updateText,
  placeHolder,
} = require("../controller/goal-controller");

module.exports = (app) => {
  app.post("/api/goal/newgoal", newGoal);

  app.get("/api/group/changedate", changeDate);

  app.get("/api/group/goalismet", isMet);

  app.put("/api/group/updatetext", updateText);

  app.delete("/api/group/placeholder", placeHolder);
};
