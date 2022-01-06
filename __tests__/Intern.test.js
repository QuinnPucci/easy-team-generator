const Intern = require('../lib/Intern')

describe ('Intern', () => {
    test ('Testing for correct name', () => {
        const internOne = new Intern("Quinn", 123, "something@gmail.com", "UofT")

        expect(internOne.getName()).toBe('Quinn')
    })
    test ('Testing for correct id', () => {
        const internOne = new Intern("Quinn", 123, "something@gmail.com", "UofT")

        expect(internOne.getId()).toBe(123)
    })
    test ('Testing for correct email', () => {
        const internOne = new Intern("Quinn", 123, "something@gmail.com", "UofT")

        expect(internOne.getEmail()).toBe('something@gmail.com')
    })
    test ('Testing for correct role', () => {
        const internOne = new Intern("Quinn", 123, "something@gmail.com", "UofT")

        expect(internOne.getRole()).toBe('Intern')
    })
    test ('Testing for correct School', () => {
        const internOne = new Intern("Quinn", 123, "something@gmail.com", "UofT")

        expect(internOne.getSchool()).toBe("UofT")
    })
})