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
                <h2>${engineer.name}</h2>
                <p>Employee Id: ${engineer.id}</p>
                <p>E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>`;
        })
        let internHtml = "";
        interns.forEach(intern => {
            internHtml += `<div class="card">
                <h2>${intern.name}</h2>
                <p>Employee Id: ${intern.id}</p>
                <p>E-mail: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
        </div>`;
        })
        let managerHtml = "";
        managers.forEach(manager => {
            managerHtml += `<div class="card">
                <h2>${manager.name}</h2>
                <p>Employee Id: ${manager.id}</p>
                <p>E-mail: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>`;
        })


        html = html.replace("<!--Manager-->", managerHtml);
        html = html.replace("<!--Engineers-->", engineerHtml);
        html = html.replace("<!--Interns-->", internHtml);

        fs.writeFileSync("./dist/index.html", html, "utf-8");

        console.log("Team Members Added");
}}

module.exports = teamMembers;