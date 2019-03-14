const passport = require('passport');
const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
const config = require('../../config/config');

const configurePassport = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new FitbitStrategy(
      {
        clientID: config.fitbitApiConfig.client.id,
        clientSecret: config.fitbitApiConfig.client.secret
      },
      // Verify callback function
      (accessToken, refreshToken, profile, done) => {
        console.log('callback for passport auth');
        done(null, { accessToken, refreshToken, profile });
      }
    )
  );
};

module.exports = configurePassport;
