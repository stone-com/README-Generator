const inquirer = require('inquirer');
const fs = require('fs');

//license types array (used in licensebadge function to display badge) just used first 10 in alphabetic list
const licenseArr = ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License"]

//array of question objects to use with inquirer prompt
const getUserInput = () => {
    return inquirer.prompt([
    {name: 'license',
    message: 'Select kind of license for this application:',
    type: 'list',
    // array of license types (first 10 alphabetically)
    choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License"]},
    {name: 'title',
    message: 'What is the application title?',
    type: 'input'},
    {name: 'description',
    message: 'What does the application do?',
    type: 'input'},
    {name: 'install',
    message: 'How do I install the application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use the application?',
    type: 'input'},
    {name: 'contributing',
    message: 'How do I make a contribution to the application?',
    type: 'input'},
    {name: 'testing',
    message: 'How do I test the application?',
    type: 'input'},
    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},
    {name: 'fileName',
    message: 'What do you want to name this readme file?',
    type: 'input'},
])};

//function to show license badge, takes in license choice from user from getUserInput function, then displays corresponding badge. if theres no license, it will be an empty string.

const licenseBadge = (license) => {
    console.log(license);
    switch (license) {
            case licenseArr[0]:
              return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)";
              break;
            case licenseArr[1]:
              return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
              break;
            case licenseArr[2]:
              return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
              break;
            case licenseArr[3]:
              return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
              break;
            case licenseArr[4]:
              return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
              break;
            case licenseArr[5]:
              return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
              break;
            case licenseArr[6]:
              return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
              break;
            case licenseArr[7]:
              return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
              break;
            case licenseArr[8]:
              return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
              break;
            case licenseArr[9]:
              return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
              break;
            default:
                return ""
            }
          }


//function to generate the markdown

const generateReadMe = (data) => {
    return `# ${data.title}
## License Badge
${licenseBadge(data.license)}
## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)
## Description
${data.description}
## Installation
${data.install}
## Usage
${data.usage}
## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/)  
${data.contributing}
## Tests
${data.testing}
## Questions?
### Reach me here: 
[${data.username}](https://github.com/${data.username})  
${data.email}`
}

//function to write the readme file

const writeFile = (fileName, data) => {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.error(err) : console.log(`${fileName}.md has successfully been generated!`))
}

//function to initialize and start the app

const initialize = async () => {
    let results = await getUserInput();
    writeFile((results.fileName),(generateReadMe(results)));
}
//call the initialize function and run the app
initialize();