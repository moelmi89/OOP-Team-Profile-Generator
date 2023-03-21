const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");

const teamMembers = (managers,engineers,interns) => {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    if (html) {
        let engineerHtml = "";
        engineers.forEach(engineer => {
            engineerHtml += `<div class="card">
                <h2>${engineer.getName()}</h2>
                <p>Employee Id: ${engineer.getId()}</p>
                <p>E-mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
        </div>`;
        })
        let internHtml = "";
        interns.forEach(intern => {
            internHtml += `<div class="card">
                <h2>${intern.getName()}}</h2>
                <p>Employee Id: ${intern.getId()}</p>
                <p>E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
        </div>`;
        })
        let managerHtml = "";
        managers.forEach(manager => {
            managerHtml += `<div class="card">
                <h2>${manager.getName()}}</h2>
                <p>Employee Id: ${manager.getId()}</p>
                <p>E-mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office Number: ${manager.getofficeNumber()}</p>
        </div>`;
        })


        html = html.replace("<!--Manager-->", managerHtml);
        html = html.replace("<!--Engineers-->", engineerHtml);
        html = html.replace("<!--Interns-->", internHtml);

        fs.writeFileSync("./dist/index.html", html, "utf-8");

        console.log("Team Members Added");
}}

module.exports = teamMembers;