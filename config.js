module.exports = {
  "facebookAuth" : {
    "clientID"      : "1240202792819750",
    "clientSecret"  : "39c1bf31607b61455582088ad9e81b46",
    "callbackURL"     : "http://localhost:3000/api/auth/facebook/callback",
    "profileURL": "https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email"

  },

  "twitterAuth" : {
    "consumerKey"        : "hs5pUmQ12YaC0bTd8PKnTvFKl",
    "consumerSecret"     : "i75D1uSmjU6iVmUSJMWHT5yDQPfCKJ9pUeBlAdePuRU93bDlcB",
    "callbackURL"        : "http://localhost:3000/auth/twitter/callback"
  },

  "googleAuth" : {
    "clientID"         : "430659928972-8c8bp11sh9rskcq0s9egr4hc1rkj01hh.apps.googleusercontent.com",
    "clientSecret"     : "pv9f-DXa1HCYv2UDN49qq-8B",
    "callbackURL"      : "/auth/google/callback"
  }
};