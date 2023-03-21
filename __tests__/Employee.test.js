const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Test the Constructor", () => {

            const id = 10;
            const name = "Andy"
            const email = "Andy@test.com";
            const role = "Employee";

            const obj = new Employee(id, name, email);

            expect(obj.id).toEqual(id);
            expect(obj.name).toEqual(name);
            expect(obj.email).toEqual(email);
            
            expect(obj.getId()).toEqual(id);
            expect(obj.getName()).toEqual(name);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual(role);
     });
    });
});