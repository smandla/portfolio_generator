// const inquirer = require("inquirer");
import inquirer from "inquirer";
// const fs = require("fs");
import fs from "fs";
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
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio Generator</title>
    </head>
    <body>
      <!-- name, location, bio, LinkedIn URL, and GitHub URL.  -->
      <header
        style="
          position: fixed;
          /* background: blue; */
          top: 0;
          height: 80px;
          width: 100%;
          text-align: center;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid black;
        "
      >
        <h1>${data.name}'s Portfolio</h1>
      </header>
      <main style="position: fixed; width: 100%; top: 90px; text-align: center">
        <section class="about_me">
          <p>Name: ${data.name}</p>
          <p>Location: ${data.location}</p>
          <p>Bio: ${data.bio}</p>
          <p>Languages Learned: </p>
          <ul>${data.tech.map((language) => {
            return `<li>${language}<li>`;
          })}
          <ul>

        </section>
        <section class="contact_me">
          <a href="${data.linkedIn}" style="text-decoration: none">LinkedIn</a>
          <a href="${data.gitHub}" style="text-decoration: none">Github</a>
        </section>
      </main>
    </body>
  </html>
  `;
}
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
