const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, email, id, gitHubUserName) {
        super(name, email, id);
        this.github = gitHubUserName;
    }

    getGithub() {
        return this.gitHubUserName;    
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;