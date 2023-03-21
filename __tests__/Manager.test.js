const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 1;
            const name = "Andy"
            const email = "test@test.com";
            const officenumber = "1";
            const role = "Manager";

            const obj = new Manager(id, name, email, officenumber);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officenumber);
            
            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getofficeNumber()).toEqual(officenumber);
     });
    });
});