import { getUserById } from '../../src/js-foundation/03-callbacks'

describe('js-foundation/03-callbacks.ts', () => {
    test('getUserById should return an error if user does not exist', () => {
        const id = 10
         getUserById(id, (err, user) => { 
            expect(err).toBe(`User not found with id ${id}`)
            expect(user).toBeUndefined()
         })
    })
    test('getUserById when receive id 1 should return Jhon Doe user', () => {
        const id = 1
         getUserById(id, (err, user) => { 
            expect(err).toBe(undefined)
            expect(user).toStrictEqual({
                id: 1,
                name: 'Jhon Doe'
            })
         })
    })
})