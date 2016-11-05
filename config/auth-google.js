var env = require('./environment');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

var google_auth = function(app) {
	app.get('/auth/google',
	  passport.authenticate('google', { scope: ['profile'] }));

	app.get('/auth/google/callback', 
	  passport.authenticate('google', { failureRedirect: '/login' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/');
	 });
}

module.exports = google_auth