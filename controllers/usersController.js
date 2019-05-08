const db = require("../models");

module.exports = {
  // Get a user and populate with saved jobs
  findById: function(req, res) {
    db.User
      .find(req.params.id)
      .populate("savedJobs")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Create a new user
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};