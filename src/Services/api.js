// src/services/api.js

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonByType = async (type, offset = 0, limit = 10) => {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    const data = await response.json();
    const pokemonEntries = data.pokemon.slice(offset, offset + limit);

    const pokemonData = await Promise.all(
        pokemonEntries.map(async ({ pokemon }) => {
            const pokemonResponse = await fetch(pokemon.url);
            return pokemonResponse.json();
        })
    );

    return {
        results: pokemonData,
        count: data.pokemon.length
    };
};

export const getPokemonDetails = async (pokemonName) => {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
};

