const controller = {};
const retrieveUserDB = require('../database/retrieveUser');
const retrieveUserWeb = require('../fitbitapi/retrieveUserWeb');
const setUserDB = require('../database/setUser');
const setStepsDB = require('../database/setSteps');
const retrieveStepsDB = require('../database/retrieveSteps');
const retrieveStepsWeb = require('../fitbitapi/retrieveStepsWeb');
const sortByDateString = require('../utils/sortArrayByDateString');
const removeEmptyValuesByMemberDate = require('../utils/removeEmptyValuesByMemberDate');

const dateFormat = 'YYYY-MM-DD';

// Gets profile from DB. If DB query brings back no results, get profile from web and update DB
controller.getProfile = (req, res) => {
  const userId = req.session.passport.user.profile.id;
  req.getConnection(async (err, connection) => {
    let response;
    let user;

    try {
      response = await retrieveUserDB(connection, userId);
    } catch (error) {
      console.log(`Failed to retrieve user from database: ${error}`);
    }
    [user] = response;

    if (!response || !response.length) {
      response = await retrieveUserWeb(req.session.passport.user.accessToken);
      ({ user } = response.data);
      setUserDB(connection, user);
    }
    res.json(user);
  });
};

// Gets steps from DB. If DB query brings back no results, get steps from web and update DB
controller.getSteps = (req, res) => {
  const userId = req.session.passport.user.profile.id;
  // eslint-disable-next-line dot-notation
  const { memberSince } = req.session.passport.user.profile['_json'].user;

  req.getConnection(async (err, connection) => {
    let response = await retrieveStepsDB(connection, userId);
    let steps;
    steps = response;

    if (!response || !response.length) {
      response = await retrieveStepsWeb(req.session.passport.user.accessToken);
      steps = response.data['activities-steps'];
      setStepsDB(connection, userId, steps);
    }

    const dateSortedResults = sortByDateString(steps, 'dateTime', dateFormat);
    const trimmedResults = removeEmptyValuesByMemberDate(
      dateSortedResults,
      memberSince,
      dateFormat
    );
    res.json(trimmedResults);
  });
};

// controller.updateProfile = (req, res) => {
//   // todo
// };

module.exports = controller;
