const Manager = require('../lib/Manager')

describe ('Manager', () => {
    test ('Testing for correct name', () => {
        const managerOne = new Manager("Quinn", 123, "something@gmail.com", 555)

        expect(managerOne.getName()).toBe('Quinn')
    })
    test ('Testing for correct id', () => {
        const managerOne = new Manager("Quinn", 123, "something@gmail.com", 555)

        expect(managerOne.getId()).toBe(123)
    })
    test ('Testing for correct email', () => {
        const managerOne = new Manager("Quinn", 123, "something@gmail.com", 555)

        expect(managerOne.getEmail()).toBe('something@gmail.com')
    })
    test ('Testing for correct role', () => {
        const managerOne = new Manager("Quinn", 123, "something@gmail.com", 555)

        expect(managerOne.getRole()).toBe('Manager')
    })
    test ('Testing for correct office number', () => {
        const managerOne = new Manager("Quinn", 123, "something@gmail.com", 555)

        expect(managerOne.getOfficeNumber()).toBe(555)
    })
})