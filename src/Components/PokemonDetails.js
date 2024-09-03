import React from 'react';
import './PokemonDetails.css';
import { statTranslations } from '../utils/TranslationDetails';

const PokemonDetails = ({ pokemon, onClose }) => {
    return (
        <div className="pokemon-details">
            <button onClick={onClose}>Cerrar</button>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <div className="info-block">
                <h3>Estadísticas</h3>
                <ul>
                    {pokemon.stats.map(stat => (
                        <li key={stat.stat.name}>
                            {statTranslations[stat.stat.name] || stat.stat.name}: {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="info-block">
            <p>Primeras 3 habilidades:</p>
                <ul>
                    {pokemon.moves.slice(0, 3).map(move => (
                        <li key={move.move.name}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PokemonDetails;
