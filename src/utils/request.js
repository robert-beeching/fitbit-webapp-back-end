const axios = require('axios');
const config = require('../../config/config');

async function performRequest(method, path, accessToken) {
  const uri = `${config.fitbitApiConfig.auth.tokenHost}1/user/-${path}`;
  const result = axios.get(uri, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return result;
}

module.exports = performRequest;
