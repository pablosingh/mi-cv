import { Proyect } from './Proyect';
import s from '../styles/Proyects.module.css';

export const Proyects = () => {
    return (
        <div className={s.container} id="proyects">
            <div className={s.card}>
                <Proyect/>
                <Proyect/>
                <Proyect/>
                <Proyect/>
            </div>
        </div>
    )
};