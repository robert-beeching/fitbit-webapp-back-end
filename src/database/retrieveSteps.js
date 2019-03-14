module.exports = (connection, userId) => {
  const sqlGetSteps = `SELECT value, dateTime FROM ${connection.config.database}.steps WHERE fitbitDB.steps.userid = ?`;

  return new Promise((resolve, reject) => {
    connection.query(sqlGetSteps, [userId], (err, results) => {
      if (err) {
        console.log(`Failed to retrieve steps from database: ${err.message}`);
        reject(err);
      }
      resolve(results);
    });
  });
};
