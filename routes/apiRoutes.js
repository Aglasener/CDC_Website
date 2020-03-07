var db = require("../models");

module.exports = function(app) {
  // RESULT TABLE
  // Get all results
  app.get("/api/results", function(req, res) {
    db.Result.findAll({}).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // Create a new user result
  app.post("/api/results", function(req, res) {
    db.Result.create(req.body).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  // Delete an  by id
  app.delete("/api/results/:id", function(req, res) {
    db.Result.destroy({ 
      where: { id: req.params.id 
      } 
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });

//-----------------------------------------------------

  // USER TABLE
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user result
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an  by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ 
      where: { id: req.params.id 
      } 
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
