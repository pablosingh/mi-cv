import image from '../img/foto_perfil.jpeg';
import s from '../styles/Name.module.css';

export const Name = () => {
    return (
        <div className={s.container} id='name'>
            <div className={s.card}>
                <div className={s.imgDiv}>
                    <img src={image} alt="Foto Perfil"/>
                </div>
                <h1>Pablo Singh</h1>
            </div>
        </div>
    )
};