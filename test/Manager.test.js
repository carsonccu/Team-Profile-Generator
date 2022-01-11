const Manager = require("../lib/Manager")

describe("Init Employee...", () => {
    it("It should return officeNumber properties from Employee", () => {
        const test = new Manager("Carson", 1, "email", 20)
        expect(test.getOfficeNumber()).toEqual(300)
    })

})