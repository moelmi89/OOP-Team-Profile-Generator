const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Andy"
            const email = "test@test.com";
            const github = "@testandy";
            const role = "Engineer";

            const obj = new Engineer(id, name, email, github);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
            
            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getGitHub()).toEqual(github);
     });
    });
});