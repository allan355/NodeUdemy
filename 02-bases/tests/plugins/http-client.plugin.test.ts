import { httpClientPlugin } from "../../src/plugins/http-client.plugin";


describe('plugins/http-client.plugin.ts', () => {
    test('httpClientPlugin should return a string', async () => {
        const data = await httpClientPlugin.get("https://jsonplaceholder.typicode.com/todos/1")
        expect(data).toEqual(
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
        )

    })

    test('httpClientPlugin should throw an error when called with a valid URL and body', async () => {
        await expect(httpClientPlugin.post("https://jsonplaceholder.typicode.com/posts", { title: 'foo', body: 'bar', userId: 1 })).rejects.toThrow('Not implemented');
    })

    test('httpClientPlugin should throw an error when called with a valid URL and body', async () => {
        await expect(httpClientPlugin.put("https://jsonplaceholder.typicode.com/posts/1", { title: 'foo', body: 'bar', userId: 1 })).rejects.toThrow('Not implemented');
    })

    test('Test get with invalid URL', async () => {
        await expect(httpClientPlugin.get("invalid-url")).rejects.toThrow();
    })

    test('Test get with URL that returns error', async () => {
        await expect(httpClientPlugin.get("https://jsonplaceholder.typicode.com/error")).rejects.toThrow();
    })

    test('httpClientPlugin should throw an error when called with a valid URL', async () => {
        await expect(httpClientPlugin.delete("https://jsonplaceholder.typicode.com/posts/1")).rejects.toThrow('Not implemented');
    })
})