const moment = require('moment');

module.exports = (array, memberSince, dateFormat) => array.filter((current) => {
  const isBefore = !moment(current.dateTime, dateFormat).isBefore(memberSince, dateFormat);
  return isBefore;
});
