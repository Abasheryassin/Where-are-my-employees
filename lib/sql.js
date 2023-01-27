const mysql = require("mysql2");
const cTable = require('console.table');

const db = mysql.createConnection(
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
  const sql = `SELECT emp. id AS ID, emp.first_name AS first, emp.last_name AS last, r.title AS title, r.salary AS salery, d.name AS demartment, mang.first_name AS manager
               FROM employee emp
               JOIN role r 
               ON emp.role_id = r.id
               JOIN department d
               ON r.department_id = d.id
               LEFT JOIN employee mang
               ON emp.id = mang.manager_id`;

  db.query(sql, (err, results) => {
    console.log("\n");
    console.table(results);
  });
};

function viewRolesQuery() {
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

function addEmployeeQuery() { };

function addRoleQuery(roleName, salary, departmentId ) {
  const sql = `INSERT INTO role(title, salary, department_id)
                 VALUES (?, ?, ?)`
  db.query(sql, [roleName, salary, departmentId], (err, results) => {
    viewRolesQuery();
  });
};

function updateEmployeeQuery() {
};

function getDepartments() {
  const sql = `SELECT department.name FROM department`;
  let data = [];

  db.query(sql, (err, results) => {
    const deps = []
    results.forEach((v) => {
      deps.push(v.name);
    });
    //console.log(data)
    data = [...deps];
  });
  console.log(data);
  return data;
};


module.exports = { viewDeparmentsQuery, viewEmployeesQuery, viewRolesQuery, addDepartmentQuery, addEmployeeQuery, addRoleQuery, updateEmployeeQuery, getDepartments };