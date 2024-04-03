import { buildLogger, logger as pluginLogger } from "../../src/plugins/logger.plugin";


describe('plugins/logger.plugin.ts', () => {
    test('buildLogger should return a function logger', () => {
        const logger = buildLogger('test')

        expect(typeof logger.log).toBe('function')
        expect(typeof logger.error).toBe('function')
    })

    test("Test 'buildLogger' with empty string", () => {
        const logger = buildLogger('')

        expect(typeof logger.log).toBe('function')
        expect(typeof logger.error).toBe('function')
    })

    test("Test 'log' with empty string", () => {
        const logger = buildLogger('test')
        const mockLog = jest.spyOn(pluginLogger, 'log')


        logger.log('')

        expect(mockLog).toHaveBeenCalledWith('info',
            expect.objectContaining({ level: 'info', message: '', service: 'test' }))
    })

    test("Test 'error' with empty string", () => {
        const logger = buildLogger('test')
        const mockError = jest.spyOn(pluginLogger, 'error')


        logger.error('')

        expect(mockError).toHaveBeenCalledWith('error',

            expect.objectContaining({  message: '', service: 'test' }))
    })
})