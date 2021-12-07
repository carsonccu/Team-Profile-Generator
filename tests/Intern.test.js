const Intern= require("../lib/Intern")

describe("Init Intern...", () => {
    it("should return id from Intern", () => {
        const test = new Engineer("Sundance Kid", 3, "email", "Outlaws Anonymous")
        expect(test.getGithub()).toequal("github")
    })
})