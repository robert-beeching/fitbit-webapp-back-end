const performRequest = require('../utils/request');

module.exports = accessToken => new Promise((resolve, reject) => {
  performRequest('GET', '/profile.json', accessToken)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
      // console.log('Failed to retrieve profile from Fitbit: ' + error.message);
    });
});
