const fs = require('fs');

var htmlText = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
            <p class="lead">Welcome to an overview of your team and their positions</p>
        </div>
    </div>`


const genhtml = (employeearray) => {
    employeearray.forEach(element => {
        htmlText += ` <div class="col mb-4">
        <div class="card">
          <div class="card-header">
                ${element.getName()} <br>\n`
        if (element.getRole() === "Manager") {
            htmlText += `<i class="fas fa-mug-hot"></i>`
        } else if (element.getRole() === "Engineer") {
            htmlText += `<i class="fas fa-glasses"></i>`
        } else if (element.getRole() === "Intern") {
            htmlText += `<i class="fas fa-user-graduate"></i>`
        }
        htmlText += ` ${element.getRole()}
          </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.getId()}</li>
                    <li class="list-group-item">Email:<a href = "mailto: ${element.getEmail()}"> ${element.getEmail()}</a></li>\n`
        if (element.getRole() === "Manager") {
            htmlText += `<li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>\n`
        } else if (element.getRole() === "Engineer") {
            htmlText += `<li class="list-group-item">GitHub Username: <a href="https://github.com/${element.getGitHub()}" target="_blank">${element.getGitHub()}</a></li>\n`
        } else if (element.getRole() === "Intern") {
            htmlText += `<li class="list-group-item">School: ${element.getSchool()}</li>\n`
        }
        htmlText += `</ul></div></div></div>\n`
    });

    htmlText += `</div></body></html>`

    fs.writeFileSync('index.html', htmlText);

}



module.exports = { genhtml };
