// "use strict";

// require("./mongoose")();
// var TwitterTokenStrategy = require("passport-twitter-token");
// var User = require("mongoose").model("User");
const db = require("./models");
var passport = require("passport");
var FacebookTokenStrategy = require("passport-facebook-token");
var GoogleTokenStrategy = require("passport-google-token").Strategy;
var config = require("./config");

module.exports = function () {

  // passport.use(new TwitterTokenStrategy({
  //   consumerKey: config.twitterAuth.consumerKey,
  //   consumerSecret: config.twitterAuth.consumerSecret,
  //   includeEmail: true
  // },
  // function (token, tokenSecret, profile, done) {
  //   User.upsertTwitterUser(token, tokenSecret, profile, function (err, user) {
  //     return done(err, user);
  //   });
  // }));

  passport.use(new FacebookTokenStrategy({
    clientID: config.facebookAuth.clientID,
    clientSecret: config.facebookAuth.clientSecret
  },
  function (accessToken, refreshToken, profile, done) {
    db.User.upsertFbUser(accessToken, refreshToken, profile, function (err, user) {
      return done(err, user);
    });
  }));

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
