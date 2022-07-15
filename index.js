const inquirer = require("inquirer");
// import inquirer from "inquirer";
const fs = require("fs");
const generateHTML = require('./utils/generateHTML')
// import fs from "fs";
const questions = [
  {
    name: "name",
    type: "input",
    message: "Enter your Name",
  },
  {
    name: "location",
    type: "input",
    message: "Where are you located",
  },
  {
    name: "bio",
    type: "input",
    message: "Enter a Brief bio",
  },
  {
    name: "linkedIn",
    type: "input",
    message: "Enter Linked In url",
  },
  {
    name: "gitHub",
    type: "input",
    message: "enter your github username",
  },
  {
    name: "tech",
    type: "checkbox",
    message: "What coding languages are you familar with",
    choices: ["HTML", "JS", "CSS", "Python", "Node", "C++"],
  },
];

function runQs() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const { name } = answers;
    // const result = generateHTML(answers);
    writeToFile(`${name}.html`, generateHTML(answers));
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
runQs();
