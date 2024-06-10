// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      message: "Project Title:",
      type: "text",
      name: "title",
    },
    {
      message: "Description:",
      type: "text",
      name: "description",
    },
    {
      message: "Installation Instructions:",
      type: "text",
      name: "installation",
    },

    {
      message: "Usage Information:",
      type: "text",
      name: "usage_information",
    },

    {
      message: "Contribution Guidelines:",
      type: "text",
      name: "contribution_guidelines",
    },
    {
      message: "Test instructions:",
      type: "text",
      name: "test_instruction",
    },

    {
      message: "License?",
      type: "checkbox",
      choices: [
        "MIT License",
        "GNU General Public License v3.0",
        "Apache License 2.0",
      ],
      name: "license",
    },
    {
      message: "GitHub username:",
      type: "text",
      name: "username",
    },
    {
      message: "Email:",
      type: "text",
      name: "email",
    },
  ])
  .then((responses) => {
    console.log(responses);
    fs.writeFile("readme.md", generateMarkdown(responses), (err) => {
      err
        ? console.log(`Error: ${err}`)
        : console.log("Your README has been saved.");
    });
  });
