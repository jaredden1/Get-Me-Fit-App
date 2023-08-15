const express = require("express");
const router = express.Router();
const passport = require('passport');

router.get("/", function (req, res, next) {
  res.render("index", { title: "Get Me Fit" });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/workouts',
    failureRedirect: '/workouts'
  }
))

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/workouts')
  })
})


module.exports = router;
