// const { it, expect, test } = require("@jest/globals")
const Employee = require("../lib/Employee")

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    });

    it("Can set name", () => {
        const name = "Butch";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("get id", () => {
        const testValue = 100;
        const e = new Employee("Butch", testValue);
        expect(e.id).toBe(testValue);
    });
    it("get email", () => {
        const testValue = "butch@test.com";
        const e = new Employee("Butch", 1, testValue);
        expect(e.email).toBe(testValue);
    });
})

