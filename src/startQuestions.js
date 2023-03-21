const inquirer = require("inquirer");
const teamBuilder = require('./teamBuilder.js')

const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

managers = [];
engineers = [];
interns = [];

const {firstQuestions, engQuestions, intQuestions, manQuestions} = require("./questions");

const initialQuestions = () => {
    inquirer
        .prompt(firstQuestions)
        .then((response) => {    
            switch(response.selection) {
                case 'Add Manager':
                    ManagerQuestions()
                break;
    
                case 'Add Engineer':
                    EngineerQuestions()
                break;
                
                case 'Add Intern':
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
                const engineer = new Engineer(reponse.name, reponse.id, reponse.email, reponse.github)
                engineers.push(engineer);
                
                initialQuestions();
        })
    };

    const InternQuestions = () => {
        inquirer
            .prompt(intQuestions)
            .then((response) => {
                const intern = new Intern(reponse.name, reponse.id, reponse.email, reponse.school)
                interns.push(intern);
            
                initialQuestions();
            })
        };

    module.exports = initialQuestions;