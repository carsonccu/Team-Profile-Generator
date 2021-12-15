
const inqurier = require("inquirer")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const employeearray =[];
promptManager()

function promptStart(){
    return inqurier.prompt([
        {
            type: "list",
            name: "job",
            choices:["Engineer", "Intern", "Finish Building team."]
        },
    ])
    .then((answers) =>{
        if (answers.job === "Engineer"){
            promptEngineer();
        } else if (answers.job === "Intern"){
            promptIntern();
        } else {
            generateKey.generatehtml(employeearray);
            console.log("You've Built your team")
        }
    })
};

function promptManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerid",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is your manager's name?"
        },

    ])
    .then((answers)=>{
        const manager = new Manager(answers.managerName, answers.managerid, answers.managerEmail, answers.mangerOffice);
        employeearray.push(manager)
        console.log("manager updated")
        promptStart();
    })
};

function promptEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "engineerid",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's Github?"
        },

    ])
    .then((answers)=>{
        const engineer = new Engineer(answers.engineerName, answers.engineerid, answers.engineerEmail, answers.engineerGithub);
        employeearray.push(engineer)
        console.log("engineer updated")
        promptStart();
    })
};

function promptIntern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "InternName",
            message: "What is your Intern's name?"
        },
        {
            type: "input",
            name: "internid",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        },

    ])
    .then((answers)=>{
        const intern = new Intern(answers.internName, answers.internid, answers.internEmail, answers.school);
        employeearray.push(intern)
        console.log("intern updated")
        promptStart();
    })
};