import { Proyect } from './Proyect';
import ProjectVideo from './ProjectVideo';
import imgProyectPokemon from '../img/inicio_pokemon.jpg';
import imgProyectDog from '../img/dog-app.jpg';
import imgProyectFood from '../img/food_app.jpg';
import s from '../styles/Proyects.module.css';
import styled from 'styled-components';

export const Proyects = () => {
    return (
        <div className={s.container} id="proyects">
            <Card>
                {/* <Proyect 
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
                /> */}
                <ProjectVideo
                    img={imgProyectFood}
                    title='Cripto-App'
                    description='CRUD para Criptomonedas, usa una API'
                    video='https://youtu.be/XUopMEQz1D8'
                    repo='https://github.com/pablosingh/reg_op2'
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