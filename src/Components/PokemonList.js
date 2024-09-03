import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import Pagination from './Pagination';
import { getPokemonByType, getPokemonDetails } from '../Services/api';

const PokemonList = ({ type }) => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pokemonsPerPage = 10;

    useEffect(() => {
        const fetchPokemons = async () => {
            const { results, count } = await getPokemonByType(type, (currentPage - 1) * pokemonsPerPage, pokemonsPerPage);
            setPokemons(results);
            setTotalPages(Math.ceil(count / pokemonsPerPage));
        };
        fetchPokemons();
    }, [type, currentPage]);

    const handlePokemonClick = async (pokemonName) => {
        const details = await getPokemonDetails(pokemonName);
        setSelectedPokemon(details);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="pokemon-grid">
                {pokemons.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name} 
                        pokemon={pokemon} 
                        onClick={() => handlePokemonClick(pokemon.name)} 
                    />
                ))}
            </div>
            {selectedPokemon && (
                <PokemonDetails 
                    pokemon={selectedPokemon} 
                    onClose={() => setSelectedPokemon(null)} 
                />
            )}
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default PokemonList;