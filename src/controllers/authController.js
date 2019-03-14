const passport = require('passport');

const controller = {};

controller.session = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
};

controller.authorize = (req, res, next) => {
  passport.authenticate('fitbit', {
    scope: ['activity', 'heartrate', 'location', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight']
  })(req, res, next);
};

controller.callback = (req, res, next) => {
  passport.authenticate('fitbit', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
  })(req, res, next);
};

controller.success = (req, res) => {
  res.redirect('/');
};

controller.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

module.exports = controller;
