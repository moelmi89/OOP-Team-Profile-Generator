const inquirer = require('inquirer');
const fs = require('fs');

const firstQuestions = [{
    type: 'list',
    message: 'What would you like to do next?',
    name: 'selection',
    choices: ['Add manager', 'Add engineer', 'Add intern', 'Finish building team'],
}
];

const manQuestions = [{
    type: "input",
    message: "What is the manager's name? ",
    name: "name"
},
{
    type: "input",
    message: "What is the manager's id? ",
    name: "id"
},

{
    type: "input",
    message: "What is the manager's email? ",
    name: "email"
},
{
    type: "input",
    message: "What is the manager's office number? ",
    name: "officeNumber"

}
];

const engQuestions = [{
type: "input",
message: "What is the engineer's name? ",
name: "name"
},
{
type: "input",
message: "What is the engineer's id? ",
name: "id"
},

{
type: "input",
message: "What is the engineer's email? ",
name: "email"
}, {

type: "input",
message: "What is the engineer's Github username? ",
name: "gitHub"
}
];


const intQuestions = [{
type: "input",
message: "What is the intern's name? ",
name: "name"
},
{
type: "input",
message: "What is the intern's id? ",
name: "id"
},

{
type: "input",
message: "What is the intern's email? ",
name: "email"
}, {
type: "input",
message: "What is the intern's school? ",
name: "school"
}

];

module.exports = {firstQuestions, engQuestions, intQuestions, manQuestions};