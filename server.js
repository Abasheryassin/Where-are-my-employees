const inquirer = require("inquirer");
const {viewDeparmentsQuery, viewEmployeesQuery, viewRolesQuery, addDepartmentQuery, addEmployeeQuery, addRoleQuery, updateEmployeeQuery, getDepartments} = require("./lib/sql");

function mainPrompt(){
    inquirer
    .prompt({
        type: "list",
        message: "Please choose an action below",
        name: "mainChoice",
        choices: ["View departments", "View roles", "View employees", "Add department", "Add role", "Add employee", "Update employee role", "Exit"]
    })
    .then((response) => {
        switch (response.mainChoice){
            case "View departments":
                viewDeparments();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Update employee role":
                updateEmployee();
                break;
            default:
                console.log("Goodbye!");
                process.exit(0);
        };
    })
}

function viewDeparments() {
    viewDeparmentsQuery();
    mainPrompt();
}

function viewRoles() {
    viewRolesQuery();
    mainPrompt();
}

function viewEmployees() {
    viewEmployeesQuery();
    mainPrompt();
}

function addDepartment() {
    inquirer
    .prompt({
        type: "input",
        message: "Please enter the name of the department",
        name: "department"
    })
    .then((response) => {
        addDepartmentQuery(response.department);
        mainPrompt();
    });
}

function addRole() {

    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter the name od the role",
            name: "roleName"
        },
        {
            type: "input",
            message: "Enter the salary of the role",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter department id",
            name: "departmentId"
        }
    ])
    .then((response) => {
        const {roleName, salary, departmentId} = response;
        addRoleQuery(roleName, salary, departmentId);
        mainPrompt();
    })
}

function addEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter the employee's first name",
            name: "first"
        },
        {
            type: "input",
            message: "Enter the employee's last name",
            name: "last"
        },
        {
            type: "input",
            message: "Enter the employees role ID",
            name: "roleId"
        },
        {
            type: "input",
            message: "Enter the employee's manager's ID (hit enter in NULL)",
            name: "managerId"
        }
    ])
    .then((response) => {
        let {first, last, roleId, managerId} = response;

        addEmployeeQuery(first, last, roleId, managerId);
        mainPrompt();
    })
}

function updateEmployee() {

    inquirer
    .prompt([
        {
            type: "input",
            message: "Choose and employee ID",
            name: "employeeId"
        },
        {
            type: "input",
            message: "Enter the new role ID",
            name: "newRole"
        }
    ])
    .then((response) => {
        updateEmployeeQuery(response.employeeId, response.newRole);
        mainPrompt();
    })

}

function init() {
    mainPrompt();
}

init();