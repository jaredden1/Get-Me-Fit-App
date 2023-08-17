const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy(
    // Configuration object
    {
        callbackURL: "/auth/google/redirect",
		clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        proxy: true
    },
    async function(accessToken, refreshToken, profile, cb) {
        try {
            let user = await User.findOne({ googleId: profile.id })
            if (user) return cb(null, user)
            user = await User.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            })
            return cb(null, user);
        } catch (err) {
            return cb(err)
            
        }
    }
));
  
passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });
  
  passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId));
  });
  