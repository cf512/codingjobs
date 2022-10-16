// "use strict";

// require("./mongoose")();
// var TwitterTokenStrategy = require("passport-twitter-token");
// var User = require("mongoose").model("User");
const db = require("./models");
var passport = require("passport");
var GoogleTokenStrategy = require("passport-google-token").Strategy;
var config = require("./config");

module.exports = function () {

  passport.use(new GoogleTokenStrategy({
    clientID: config.googleAuth.clientID,
    clientSecret: config.googleAuth.clientSecret
  },
  function (accessToken, refreshToken, profile, done) {
    db.User.upsertGoogleUser(accessToken, refreshToken, profile, function (err, user) {
      return done(err, user);
    });
  }));
};
