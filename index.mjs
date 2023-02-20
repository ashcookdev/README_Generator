import inquirer from 'enquirer';
import fs from "fs/promises";

let { title, description, table_of_contents, github_user, github_repo, installation, usage, license, contributions,tests,questions } = await inquirer
    .prompt([
        {
            name: 'title',
            message: "What is the title of your project",
            type: 'input',
        },
        {
            name: 'description',
            type: 'input',
            message: "Give us a description of your project?",
            },
            {
                name: 'github_user',
                type: 'input',
                message: "What is your Github username?",
                },
                {
                    name: 'github_repo',
                    type: 'input',
                    message: "What is the name of your repository?",
                    },
            {
                name: 'table_of_contents',
                type: 'input',
                message: "Table of Contents?",
                },
                {
                    name: 'installation',
                    type: 'input',
                    message: "How do you install your application?",
                    },
                    {
                        name: 'usage',
                        type: 'input',
                        message: "How do you use your application?",
                        },
         
                        {
                            name: 'license',

type: 'select',
message: 'what license did you use?',
choices : ['MIT', 'IBM','Mozilla']},
                    {
                        name: 'contributions',
                        type: 'input',
                        message: "Who has contributed to your project?",
                        },
                    
                        {
                            name: 'tests',
                            type: 'input',
                            message: "Have you performed any tests?",
                            },
                            {
                                name: 'questions',
                                type: 'input',
                                message: "Please Enter your email?",
                                },
                    ])

                    function generateLicense() {
    
                        if (license === "MIT" ) {
                          return  license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                        } console.log(license)
                    
                        if (license === "IBM" ) {
                            return license = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
                        }
                        if (license === "Mozilla") {
                            return license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
                        }
                    }
                    generateLicense()                    



// // * The title of my project 
// * Sections entitled:
// * Description 
// * Table of Contents 
// * Installation 
// * Usage 
// * License 
// * Contributing 
// * Tests 
// * Questions


let htmlText = `
## ${title}

## Repository
"https://github.com/${github_user}/${github_repo}/

## Description
${description}

## Table of Contents
${table_of_contents}

## Screenshots


## Installation
${installation}

## Usage
${usage}

## License Badge
${license}

## Contributions
${contributions}

## Tests
${tests}

## Questions
${questions}
`

await fs.writeFile("README.md", htmlText)
console.log('success!') 


     


