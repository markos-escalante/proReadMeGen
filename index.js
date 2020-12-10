const inquirer = require("inquirer")
//enter a description, installation instructions, 
//usage information, contribution guidelines, and test instructions
inquirer
    .prompt([
        {
            type = "input",
            name = "input",
            message = "What is the title of your project?",
        },
        {
            type = "input",
            name = "description",
            message = "Please enter a descripton of your project.",

        },
        {
            type = "input",
            name = "install",
            message = "Please enter a brief description on how to install your application."
        }, 
        {
            type = "input",
            name = "usage information",
            message = "Please enter a brief description on the usage information of your application."
        },
        {
            type = "input",
            name = "contribution guidelines",
            message = "Please enter any contribution guidelines you may have for your application."
        },
        {
            type = "input",
            name  = "test instructions",
            message = "Please enter a brief description detailing how to test your application",
        },
        {
            type: "list",
            message: "What licenses would you like to use?",
            name: "licenses",
            choices = ["mit", "apache 2.0", "wtfp1"],
        },
        {

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