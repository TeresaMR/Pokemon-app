import React, { useState, useEffect } from 'react';
import PokemonList from './Components/PokemonList';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { typeTranslations } from './utils/TypeTranslation.js'; // Asegúrate de importar el archivo de traducción

const BASE_URL = 'https://pokeapi.co/api/v2';

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedType, setSelectedType] = useState('fire');
    const [types, setTypes] = useState([]);
    useEffect(() => {
        const getPokemonTypes = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/type/`);
                const data = response.data;
                console.log(data)
                setTypes(data.results)
                setLoading(false);
            } catch (err) {
            setError('Error al cargar los datos del menú');
            setLoading(false);
            console.log(err);
            }
            
        };
        getPokemonTypes();
    }, []);
    if (loading) {
        return <p>Cargando...</p>;
    }
    
    if (error) {
        return <p>{error}</p>;
    }
   
        return (
            <Container className="App">
                <h1 className="my-4 text-danger">Pokémon por tipo</h1>
                
                
                    {types.length > 0 ? 
                    <div>
                        <Form.Group as={Col} md="4" className="mx-auto">
                            <Form.Control as="select" value={selectedType} onChange={e => {console.log(e.target); setSelectedType(e.target.value)}}>
                                {types.map(type => (
                                    <option key={type.name} value={type.name}>
                                        {typeTranslations[type.name] || type.name} {/* Usa la traducción */}

                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Row>
                            <Col>
                                <PokemonList type={selectedType} />
                            </Col>
                        </Row>
                    </div>
                     : 
                    <option>No hay elementos disponibles</option>
                    }
                

            </Container>
        );
        
}

export default App;