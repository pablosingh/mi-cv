import styled from 'styled-components';
import s from '../styles/About.module.css';

export const About = () => {
    return (
        <div className={s.container} id="about">
            <div className={s.card}>
                <Hache2>
                    Hola! soy Pablo Singh me gusta mucho programar, estudié 2 años 
                    Ing. Electrónica, entre otras cosas. Aqui te comparto mis proyectos
                    y datos de contacto. Gracias!
                </Hache2>
                <Hache4>
                    Hola! soy Pablo Singh me gusta mucho programar, estudié 2 años 
                    Ing. Electrónica, entre otras cosas. Aqui te comparto mis proyectos
                    y datos de contacto. Gracias!
                </Hache4>
                <div className={s.divBtnDirections}>
                    <button onClick={ () => { 
                            window.location.href = 'https://github.com/pablosingh/';
                            }}
                        className={s.btn}
                        >GitHub
                    </button>
                    <button onClick={ () => { 
                            window.location.href = 'https://www.linkedin.com/in/pablosingh/';
                            }}
                        className={s.btn}
                        >Linkedin
                    </button>
                </div>
            </div>
        </div>
    )
};

const Hache2 = styled.h2`
    @media(max-width: 768px){
        display: none;
    }
`;

const Hache4 = styled.h4`
    @media(min-width: 768px){
        display: none;
    }
`;