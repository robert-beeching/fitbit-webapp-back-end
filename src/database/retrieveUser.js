module.exports = (connection, userId) => {
  const sqlGetProfile = `SELECT fullName, displayName, aboutMe, weight, height, dateOfBirth, memberSince, avatar FROM ${
    connection.config.database
  }.user WHERE fitbitDB.user.userid = ?`;

  return new Promise((resolve, reject) => {
    connection.query(sqlGetProfile, [userId], (err, results) => {
      if (err) {
        console.log(`Failed to retrieve from database: + ${err.message}`);
        reject(err);
      }
      resolve(results);
    });
  });
};
