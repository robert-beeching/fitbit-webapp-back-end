module.exports = (connection, userId, steps) => {
  const sqlSaveSteps = `INSERT INTO ${connection.config.database}.steps (userid, value, dateTime) VALUES ?`;

  const values = [];
  steps.forEach((stepObj) => {
    values.push([userId, stepObj.value, stepObj.dateTime]);
  });

  connection.query(sqlSaveSteps, [values], (err, results) => {
    if (err) {
      console.log(`Failed to save Steps to DB: ${err.message}`);
    } else {
      console.log(`Steps saved to DB, affected rows: ${results.affectedRows}`);
    }
  });
};
