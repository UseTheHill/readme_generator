const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How can users install the necessary dependencies to use the project on their local machine?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are the instruction and examples for use?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Credit for individuals, sites and any resource that made this project happen.',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Select a license type.',
            choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Write tests for your application and provide examples on how to run them.',
            name: 'tests',
        },
    ])

    //then
    .then((response) => {
        console.log('response: ', response)

const readmedoc = `

# ${response.title}
    
![GitHub](https://img.shields.io/badge/License-${response.license}-green)

    
## Table of Contents 
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Credits](#credits)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  


## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Credits
${response.credits}

## License 
Copyright & copy; Licensed under the ${response.license} license.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
Conact me at ${response.email} with questions. You can submit a pull request or issue on GitHub [https://github.com/${response.username}](https://github.com/${response.username}).
`;


    fs.writeFile('README.md', readmedoc, (err) => err ? console.error(err) : console.log('Success!'));
    });