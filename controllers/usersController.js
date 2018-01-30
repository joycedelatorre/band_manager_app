const db = require("../models/sequelize.js");

module.exports = {

  find: function(req, res) {
    // -- API routes for results.js to display results
    // -- Vince's route: app.get("/api/thisUser", function(req, res) {
    db.Users.update(
      { online: 1 },
      { where: { id: req.user.id } }
    ).then(function() {
    // ).then(function(dbResponse) {
      db.Users.findOne(
        { where: { id: req.user.id } }
      ).then(function(dbRes) {
        res.json(dbRes);
      });
    });
  },

  login: function(req, res) {
    // -- POST request in register.js to add new users
    // -- Vince's route: app.post("/api/users", function(req, res) {
    console.log("usersController login()", req.username);
    db.Users.findOne({ where: { username: req.username } }).then(function(user) {
      console.log(user);
      if(!user) {
        db.Users.create(req.username).then(function(dbRes) {
          res.json(dbRes);
        });
      }
      else {
        res.send(false);
      }
    });
  },

  logout: function(req, res) {
    // -- UNUSED ?
    db.Users.update(
      { online: 0 },
      { where: { id: req.user.id } }
    ).then(function(dbRes) {
      res.json(dbRes);
    });
  }

};