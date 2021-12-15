
const inqurier = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const { generateKey } = require("crypto")
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

function
