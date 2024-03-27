import { getAge } from "../../src/plugins/get-age.plugin";


describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a person', () => {
        const birthDate = '1994-03-18'
        const age = getAge(birthDate)

        expect(typeof age).toBe('number')
    })
    // The getAge() function should return an error if the birth date is not provided.

    test('getAge() should return an error if the birth date is not provided', () => {
        const birthDate = ''
        const age = getAge(birthDate)

        expect(age).toBeInstanceOf(Error)
    })
    // The getAge() function should return the correct age when the birth date is on a leap year.

    test('getAge() should return the correct age when the birth date is on a leap year', () => {
        const birthDate = '1992-02-29'
        const age = getAge(birthDate)
        const calculatedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
        expect(age).toEqual(calculatedAge)
    })

    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995)

        const birthDate = '1995-10-21'

        const age = getAge(birthDate)

        expect(age).toBe(0)
        expect(spy).toHaveBeenCalled()
    })
})