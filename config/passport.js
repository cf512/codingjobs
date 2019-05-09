const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config()
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/config.json")[env];

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (userDataFromCookie, done) {
    done(null, userDataFromCookie);
});

let callbackURL = "";

// if (config.use_env_variable) {
//     callbackURL = "https://fillinthecode.herokuapp.com/auth/google/callback";
// } else {
    callbackURL = "http://localhost:3000/auth/google/callback";
// }

// Set up passport strategy
passport.use(new GoogleStrategy(
    {
        // clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID || process.env.clID,
        // clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET || process.env.clSE,
        clientID: process.env.clID,
        clientSecret: process.env.clSE,
        callbackURL: callbackURL,
        scope: ["email"],
    },
    // This is a "verify" function required by all Passport strategies
    function(accessToken, refreshToken, profile, cb){
        console.log("Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user.");
        // console.log('Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user:', profile); // more verbose
        return cb(null, profile);
    }
));

module.exports = passport;