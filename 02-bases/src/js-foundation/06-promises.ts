import { httpClientPlugin } from "../plugins"

export const getPokemonById = async (id: Number | String): Promise<any> => {
    try{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);
        return pokemon;
    }catch(error){
        throw new Error(`Pokemon not found whit id ${id}`)
    }
    //return fetch(url).then((response) => response.json()).then((pokemon) => pokemon.name);
}
