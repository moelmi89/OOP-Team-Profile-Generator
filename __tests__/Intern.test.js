const Engineer = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Andy"
            const email = "test@test.com";
            const school = "Test School";
            const role = "Intern";

            const obj = new Intern(id, name, email, school);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
            
            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getSchool()).toEqual(school);
     });
    });
});