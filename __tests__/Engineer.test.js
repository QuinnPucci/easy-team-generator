const Engineer = require('../lib/Engineer')

describe ('Engineer', () => {
    test ('Testing for correct name', () => {
        const engineerOne = new Engineer("Quinn", 123, "something@gmail.com", "QuinnPucci")

        expect(engineerOne.getName()).toBe('Quinn')
    })
    test ('Testing for correct id', () => {
        const engineerOne = new Engineer("Quinn", 123, "something@gmail.com", "QuinnPucci")

        expect(engineerOne.getId()).toBe(123)
    })
    test ('Testing for correct email', () => {
        const engineerOne = new Engineer("Quinn", 123, "something@gmail.com", "QuinnPucci")

        expect(engineerOne.getEmail()).toBe('something@gmail.com')
    })
    test ('Testing for correct role', () => {
        const engineerOne = new Engineer("Quinn", 123, "something@gmail.com", "QuinnPucci")

        expect(engineerOne.getRole()).toBe('Engineer')
    })
    test ('Testing for correct GitHub', () => {
        const engineerOne = new Engineer("Quinn", 123, "something@gmail.com", "QuinnPucci")

        expect(engineerOne.getGithub()).toBe("QuinnPucci")
    })
})