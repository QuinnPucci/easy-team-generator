const Employee = require('../lib/Employee')

describe ('Employee', () => {
    test ('Testing for correct name', () => {
        const EmployeeOne = new Employee("Quinn", 123, "something@gmail.com")

        expect(EmployeeOne.getName()).toBe('Quinn')
    })
    test ('Testing for ID', () => {
        const EmployeeOne = new Employee("Quinn", 123, "something@gmail.com")

        expect(EmployeeOne.getId()).toBe(123)
    })
    test ('Testing for correct name', () => {
        const EmployeeOne = new Employee("Quinn", 123, "something@gmail.com")

        expect(EmployeeOne.getEmail()).toBe('something@gmail.com')
    })
    test ('Testing for role', () => {
        const EmployeeOne = new Employee("Quinn", 123, "something@gmail.com")

        expect(EmployeeOne.getRole()).toBe('Employee')
    })
})