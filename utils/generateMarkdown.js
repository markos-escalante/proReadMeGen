function generateMarkdown(data) {
  return `# ${data.title}
## Description 
    ${data.description}

## Table of Contents

You can utilize the Table of Contents to be taken to the corresponding section of the README.

* [Installation Instructions](#install)
* [Usage Information](#usage)
* [Contribution Guidelines](#contribution)
* [Test Instructions](#test)
* [License](#license)

## Installation Instructions
    ${data.install}

## Usage Information
    ${data.usage}

## Contribution Guidelines
    ${data.contribution}

## Test Instructions 
    ${data.test}

## License
    ${data.license}

## Questions?
    Github Profile: ${data.github}
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
