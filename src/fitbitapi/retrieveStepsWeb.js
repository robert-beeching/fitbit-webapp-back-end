const performRequest = require('../utils/request');

module.exports = accessToken => new Promise((resolve, reject) => {
  performRequest('GET', '/activities/steps/date/today/1y.json', accessToken)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});
