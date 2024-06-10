// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "https://img.shields.io/github/license/saltstack/salt";
    case "Gnu":
      return "https://img.shields.io/badge/License-GNU%20GPL-blue";
    case "MIT":
      return "https://img.shields.io/badge/license-MIT-blue";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "https://www.apache.org/licenses/";
      break;
    case "Gnu":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `## License

 ${badge}

 This project is licensed under the [${license}](${link}) license.`;
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

${renderLicenseSection(responses.license)}

`;
}

module.exports = generateMarkdown;
