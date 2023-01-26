const mysql = require("mysql2");
const cTable = require('console.table');

const db = mysql.createConnection (
  {
    host: 'localhost',
    user: 'root',
    password: 'XSWqaz^100',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee_tracker_db database.`));

  function viewDeparmentsQuery() {
    const sql = `SELECT id, department.name AS department FROM department`;

    db.query(sql, (err, result) => {
        console.log("\n");
        console.table(result);
    });
  };

  module.exports = {viewDeparmentsQuery}