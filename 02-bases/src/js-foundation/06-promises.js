const { httpClientPlugin } = require('../plugins')
const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);
    if (!pokemon) throw new Error('Pokemon No existe')

    return pokemon.name;
    //return fetch(url).then((response) => response.json()).then((pokemon) => pokemon.name);
}


module.exports = getPokemonById