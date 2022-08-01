import s from '../styles/Proyect.module.css';

export const Proyect = () => {
    return (
        <div className={s.container}>
            <img src="" alt='Imagen'/>
            <div>
                <h2>Titulo</h2>
                <p>Descripcion</p>
                <div className={s.twoBtn}>
                    <button>Deploy</button>
                    <button>Repo</button>
                </div>
            </div>
        </div>
    )
};