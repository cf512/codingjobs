/* eslint-disable no-console */
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (userDataFromCookie, done) {
  done(null, userDataFromCookie);
});

let callbackURL = "";

callbackURL = "/auth/google/callback";

// Set up passport strategy
passport.use(new GoogleStrategy(
  {
    clientID: process.env.clID,
    clientSecret: process.env.clSE,
    callbackURL: callbackURL,
    scope: ["email"],
  },
  // This is a "verify" function required by all Passport strategies
  function(accessToken, refreshToken, profile, cb){
    console.log("Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user.");
    return cb(null, profile);
  }
));

module.exports = passport;