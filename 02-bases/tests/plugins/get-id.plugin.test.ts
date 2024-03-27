import { getId } from "../../src/plugins/get-id.plugin";


describe('plugins/get-id.plugin.ts', () => {
    test('getId() should return a ID', () => {
        const ID = getId()
        expect(typeof ID).toBe('string')
        expect(ID).toHaveLength(36)
    })

    test('getId() should return a unique ID', () => {
        const ID1 = getId()
        const ID2 = getId()
        expect(ID1).not.toBe(ID2)
    })

    test('getId() should return valid IDs when called multiple times', () => {
        for (let i = 0; i < 10; i++) {
            const ID = getId()
            expect(typeof ID).toBe('string')
            expect(ID).toHaveLength(36)
        }
    })

    test('getId() should return a valid UUID v4 string', () => {
        const ID = getId()
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        expect(regex.test(ID)).toBe(true)
    })
})