module.exports = (connection, user) => {
  const sqlSaveProfile = `INSERT INTO ${connection.config.database}.user (userid, fullName, displayName, aboutMe, weight, height, dateOfBirth, memberSince, avatar) VALUES (?,?,?,?,?,?,?,?,?)`;
  const userId = user.encodedId;
  const {
    fullName, displayName, aboutMe, weight, height, dateOfBirth, memberSince, avatar
  } = user;

  connection.query(
    sqlSaveProfile,
    [userId, fullName, displayName, aboutMe, weight, height, dateOfBirth, memberSince, avatar],
    (err, results) => {
      if (err) {
        console.log(`Failed to save User to DB:  ${err.message}`);
      } else {
        console.log(`User saved to DB, affected rows: ${results.affectedRows}`);
      }
    }
  );
};
