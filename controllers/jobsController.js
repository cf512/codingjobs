const db = require("../models");
var mongojs = require("mongojs");

module.exports = {
  // Save a new job and associate it with a user
  create: function(req, res) {
    db.Job
      .create(req.body)
      .then(dbModel => db.User.findOneAndUpdate(
        {
          _id: mongojs.ObjectId(req.params.userId)
        }, {
          $push: { savedJobs: dbModel._id }
        }, {
          new: true
        }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.User
      .findOneAndUpdate(
        {
          _id: mongojs.ObjectId(req.params.userId)
        }, {
          $pull: { savedJobs: req.body.jobId }
        }, {
          new: true
        })
      .populate("savedJobs")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};