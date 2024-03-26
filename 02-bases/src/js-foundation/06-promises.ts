import { httpClientPlugin } from "../plugins/index"

export const getPokemonById = async (id: Number | String): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);
    if (!pokemon) throw new Error('Pokemon No existe')

    return pokemon;
    //return fetch(url).then((response) => response.json()).then((pokemon) => pokemon.name);
}
