const inquirer = require("inquirer");
const { viewDeparmentsQuery} = require("./lib/sql");
const cTable = require('console.table');

function mainPrompt(){
    inquirer
    .prompt({
        type: "list",
        message: "Please choose an action below",
        name: "mainChoice",
        choices: ["View departments", "View roles", "View employees", "Add department", "Add role", "Add employee", "Update employee", "Exit"]
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
            case "Update employee":
                updateEmployee();
                break;
            default:
                console.log("Goodbye!");
                process.exit(0);
        };
    })
}

async function viewDeparments() {
    console.log("in view departments");
    viewDeparmentsQuery();
    mainPrompt();
}

function viewRoles() {
    console.log("in view roles");

    mainPrompt();
}

function viewEmployees() {
    console.log("in view employees");

    mainPrompt();
}

function addDepartment() {
    console.log("in add deparment");

    mainPrompt();
}

function addRole() {
    console.log("in add role");

    mainPrompt();
}

function addEmployee() {
    console.log("in add employee");

    mainPrompt();
}

function updateEmployee() {
    console.log("in update employee");

    mainPrompt();
}

function init() {
    mainPrompt();
}
init();