// const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

describe("Init Engineer...", () => {
    it("should return id from Employee", () => {
        const test = new Engineer("Butch Cassidy", 2, "email", "github")
        expect(test.getGithub()).toequal("github")
    })
})