import { Proyect } from './Proyect';
import imgProyectPokemon from '../img/inicio_pokemon.jpg';
import s from '../styles/Proyects.module.css';
import styled from 'styled-components';

export const Proyects = () => {
    return (
        <div className={s.container} id="proyects">
            <Card>
                <Proyect 
                    img={imgProyectPokemon}
                    title='Pokemons' 
                    description='Utiliza una api, CRUD para pokemons'
                    deploy='http://ps-poke-blue.herokuapp.com/'
                    repo='https://github.com/pablosingh/poke'
                    />
            </Card>
        </div>
    )
};

const Card = styled.div`
    width: 50%;
    min-height: 40%;
    background-color: #edfafd;
    border-radius: 1em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    @media(max-width: 768px){
        width: 80%;
    }
`;