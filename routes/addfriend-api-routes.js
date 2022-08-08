const db = require("../models");

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

  app.post("/api/friend/add", (req, res) => {
    console.log("ive been hit");
    res.json(success);
  });
  app.get("/api/friend/load_friends", (req, res) => {
    console.log("ive been hit");
    res.json(success);
  });
  app.delete("/api/friend/unfriend", (req, res) => {
    console.log(req);
    res.json(success);
  });

  // will add if needed
  //   app.update("/api/friend/", (req, res) => {
  //     console.log("ive been hit");
  //     res.json(characters);
  //   });
};
