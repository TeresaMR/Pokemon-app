import React from 'react';
import { typeTranslations } from '../utils/TypeTranslation.js'; // Asegúrate de importar el archivo de traducción

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonCard = ({ pokemon, onClick }) => {
    return (
        <div className="pokemon-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
            <p>
                N° Pokedex: {pokemon.id}
            </p>
            
            <p>
                Tipo: {pokemon.types.map(type => typeTranslations[type.type.name] || type.type.name).join(', ')}
            </p>
        </div>
    );
};

export default PokemonCard;

