const moment = require('moment');

module.exports = (array, objectKey, format) => array.sort((entryOne, entryTwo) => {
  if (moment(entryOne[objectKey], format).isBefore(moment(entryTwo[objectKey], format))) {
    return false;
  }
  return true;
});
