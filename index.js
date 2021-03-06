const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "badge",
        message: "Please select a badge",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a descripton of your project.",

    },
    {
        type: "input",
        name: "install",
        message: "Please enter a brief description on how to install your application.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter a brief description on the usage information of your application.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter any contribution guidelines you may have for your application.",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter a brief description detailing how to test your application.",
    },
    {
        type: "list",
        message: "What licenses would you like to use?",
        name: "license",
        choices: [
            "mit",
            "apache 2.0",
            "wtfp1"],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github name.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your README has successfully been generated!");
        }
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        axios
            .get("https://api.github.com/users/" + data.github)
            .then(res => {
                console.log(res);
            })
        const userInput = generateMarkdown(data);
        fs.writeFile("README.md", userInput, function (err) {
            if (err) {
                throw err;
            }
        });
    });
}

// function call to initialize program
init();