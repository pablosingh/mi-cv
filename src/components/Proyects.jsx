import { Proyect } from './Proyect';
import imgProyectPokemon from '../img/inicio_pokemon.jpg';
import s from '../styles/Proyects.module.css';

export const Proyects = () => {
    return (
        <div className={s.container} id="proyects">
            <div className={s.card}>
                <Proyect 
                    img={imgProyectPokemon}
                    title='Pokemons' 
                    description='Utiliza una api, CRUD para pokemons'
                    deploy='http://ps-poke-blue.herokuapp.com/'
                    repo='https://github.com/pablosingh/poke'
                    />
                {/* <Proyect 
                    img=''
                    title='Pokemons' 
                    description='Utiliza una api, CRUD para pokemons'
                    deploy='http://ps-poke-blue.herokuapp.com/'
                    repo='https://github.com/pablosingh/poke'
                    />
                <Proyect 
                    img=''
                    title='Pokemons' 
                    description='Utiliza una api, CRUD para pokemons'
                    deploy='http://ps-poke-blue.herokuapp.com/'
                    repo='https://github.com/pablosingh/poke'
                    /> */}
            </div>
        </div>
    )
};