import s from '../styles/About.module.css';

export const About = () => {
    return (
        <div className={s.container} id="about">
            <div className={s.card}>
                <h2>
                    Hola! soy Pablo Singh me gusta mucho programar, estudié 2 años 
                    Ing. Electrónica, entre otras cosas. Aqui te comparto mis proyectos
                    y datos de contacto. Gracias!
                </h2>
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