const inquirer = require("inquirer");
const teamBuilder = require('./teamBuilder.js')

const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

var managers = [];
var engineers = [];
var interns = [];

const {firstQuestions, engQuestions, intQuestions, manQuestions} = require("./questions");

const initialQuestions = () => {
    inquirer
        .prompt(firstQuestions)
        .then((response) => {    
            switch(response.selection) {
                case 'Add manager':
                    ManagerQuestions()
                break;
    
                case 'Add engineer':
                    EngineerQuestions()
                break;
                
                case 'Add intern':
                    InternQuestions()
                break;
    
                case 'Finish building team':
                
                    teamBuilder(managers,engineers,interns)
                break;
            }  
        })
    }

    const ManagerQuestions = () => {
        inquirer
            .prompt(manQuestions)
            .then((response) => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
                managers.push(manager);
    
                initialQuestions();
            });
    };

    const EngineerQuestions = () => {
        inquirer
            .prompt(engQuestions)
            .then((response) => {
                const engineer = new Engineer(response.name, response.id, response.email, response.github)
                engineers.push(engineer);
                
                initialQuestions();
        })
    };

    const InternQuestions = () => {
        inquirer
            .prompt(intQuestions)
            .then((response) => {
                const intern = new Intern(response.name, response.id, response.email, response.school)
                interns.push(intern);
            
                initialQuestions();
            })
        };

    module.exports = initialQuestions;