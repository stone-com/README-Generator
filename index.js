const inquirer = require('inquirer');
const fs = require('fs');

//array of question objects to use with inquirer prompt
function getUserInput(){
    return inquirer.prompt([
    {name: 'license',
    message: 'Select kind of license for this application:',
    type: 'list',
    // arry of license types
    choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]},
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

//function to generate the markdown

const generateReadMe = (data) => {
    return `# ${data.title}
    ## Badges
    ${renderLicenseBadge(data.license)}
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