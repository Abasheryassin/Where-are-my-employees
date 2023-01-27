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

    db.query(sql, (err, results) => {
        console.log("\n");
        console.table(results);
    });
  };

  function viewEmployeesQuery() {
    const sql = `SELECT *  
                 FROM employee emp`;

    db.query(sql, (err, results) => {
        console.log("\n");
        console.table(results);
    });
  };

  function viewRolesQuery(){
    const sql = `SELECT role.id, role.title, role.salary, department.name AS department
                 FROM role, department
                 WHERE department.id = role.department_id`;

    db.query(sql, (err, results) => {
        console.log("\n");
        console.table(results);
    });
  };

  function addDepartmentQuery(department) {
    const sql = `INSERT INTO department(name)
                 VALUES (?)`
    db.query(sql, department, (err, results) => {
      viewDeparmentsQuery();
    });
  };

  function addEmployeeQuery() {};

  function addRoleQuery() {};

  function updateEmployeeQuery() {
  };

  module.exports = {viewDeparmentsQuery, viewEmployeesQuery, viewRolesQuery, addDepartmentQuery, addEmployeeQuery, addRoleQuery, updateEmployeeQuery};