const Intern = require("../lib/Intern")

describe("Init Intern...", () => {
    it("should return id from Intern", () => {
        const test = new Intern("Sundance Kid", 3, "email", "Outlaws Anonymous")
        expect(test.getSchool()).toEqual("Outlaws Anonymous")
    })
})