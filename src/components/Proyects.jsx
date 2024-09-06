import { Proyect } from './Proyect';
import imgProyectPokemon from '../img/inicio_pokemon.jpg';
import imgProyectDog from '../img/dog-app.jpg';
import imgProyectFood from '../img/food_app.jpg';
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
                    deploy='https://poke-dun.vercel.app/'
                    repo='https://github.com/pablosingh/poke'
                    />
                <Proyect 
                    img={imgProyectDog}
                    title='Dog-App' 
                    description='Utiliza una api, CRUD para Perros'
                    deploy='https://dog-app-three.vercel.app/'
                    repo='https://github.com/pablosingh/dog-app'
                />
                <Proyect 
                    img={imgProyectFood}
                    title='Food-App' 
                    description='App de menu para un resto, permite ordenar, la parte de cocina lo recibe inmediatamente'
                    deploy='https://ps-food-app.web.app/'
                    repo='https://github.com/pablosingh/food-app'
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