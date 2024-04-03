import { getPokemonById } from "../../src/js-foundation/06-promises"


describe('js-foundation/06-promises.ts', () => {
    test("getPokemonById shoul return a pokemon", async () => {
        const pokemonId = 1;
        const pokemon = await getPokemonById(pokemonId)
        //console.log(pokemon)
        expect(pokemon.name).toBe('bulbasaur')
    })
    // The function getPokemonById should throw an error when given an invalid pokemon id.

    test("getPokemonById should throw an error for invalid id", async () => {
        const pokemonId = 'invalid';
        await expect(getPokemonById(pokemonId)).rejects.toThrow(`Pokemon not found whit id ${pokemonId}`);
    })
    // The function getPokemonById should return a pokemon object with the correct name when given a valid pokemon id.

    test("getPokemonById should return a pokemon with correct name", async () => {
        const pokemonId = 'bulbasaur';
        const pokemon = await getPokemonById(pokemonId);
        expect(pokemon.name).toBe('bulbasaur');
    })
    // Testing getPokemonById with a negative id

    test("getPokemonById should throw an error for negative id", async () => {
        const pokemonId = -1;
        await expect(getPokemonById(pokemonId)).rejects.toThrow(`Pokemon not found whit id ${pokemonId}`);
    })
    // Testing getPokemonById with a string id

    test("getPokemonById should throw an error for string id", async () => {
        const pokemonId = 'invalid';
        await expect(getPokemonById(pokemonId)).rejects.toThrow(`Pokemon not found whit id ${pokemonId}`);
    })
})