import { buildMakePerson } from "../../src/js-foundation/05-factory"


describe('js-foundation/05-factory.ts', () => {
    const getId = () => '1234'
    const getAge = () => 35
    
    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({ getId, getAge });
        expect(typeof makePerson).toBe('function')
    });
    test('buildMakePerson should return a person', () => {

        const makePerson = buildMakePerson({ getId, getAge });
        const jhonDoe = makePerson({
            name: 'Jhon Doe',
            birthdate: '1994-03-18'
        })
        console.log(jhonDoe)
        expect(jhonDoe).toEqual({
            id: '1234',
            name: 'Jhon Doe',
            birthdate: '1994-03-18',
            age: 35
        })
    });
})