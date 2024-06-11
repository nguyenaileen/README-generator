// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(responses) {
  let badge = "";
  if (responses.license === "Apache License 2.0") {
    badge = `[![License: Apache License 2.0](https://img.shields.io/github/license/saltstack/sal)]`;
  } else if (responses.license === "GNU General Public License v3.0") {
    badge = `[![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20GPL-blue)]`;
  } else if (responses.license === "MIT License") {
    badge = `[![License: MIT License](https://img.shields.io/badge/license-MIT-blue]`;

    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(responses) {
  let link = "";
  if (responses.license === "Apache License 2.0") {
    link = "https://apache.org/licenses/LICENSE-2.0";
  } else if (responses.license === "GNU General Public License v3.0") {
    link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (responses.license === "MIT License") {
    link = "https://opensource.org/licenses/MIT";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(responses) {
  const licenseBadge = renderLicenseBadge(link);
  const licenseLink = renderLicenseLink(responses);
  if (licenseBadge && licenseLink) {
    return `This project is livensed by ${licenseBadge} [here](${licenseLink}).`;
  } else {
    return "no license";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const responses = {
    title: data.title,
    description: data.description,
    installation: data.installation,
    license: data.license,
    usage_information: data.usage_information,
    contribution_guidelines: data.contribution_guidelines,
    test_instruction: data.test_instruction,
    username: data.username,
    email: data.email,
  };

  return `# ${responses.title}

## Description

${responses.description}

## Table of Contents

- [Installation]
- [Usage]
- [Contribution Guidelines]
- [Tests]
- [Questions]

## Installation

${responses.installation}

## Usage

${responses.usage_information}

## Contribution Guidelines

${responses.contribution_guidelines}

## Tests

${responses.test_instruction}

## Questions

Visit my github profile at githib.com/${
    responses.username
  } or send me an email at ${responses.email} 

## License

${renderLicenseSection(responses)}`;
}

module.exports = generateMarkdown;
