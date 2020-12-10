const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type = "input",
            name = "name",
            message = "What is the title of your project?"
        },
        {
            type: "input",
            name: "name",
            message = ""
        }
    ])

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();