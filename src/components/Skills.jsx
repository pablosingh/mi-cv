import s from '../styles/Skills.module.css';

export const Skills = () => {
    return (
        <div className={s.container} id="skills">
            <div className={s.card}>
                <div className={s.skill}>React</div>
                <div className={s.skill}>Redux</div>
                <div className={s.skill}>HTML</div>
                <div className={s.skill}>CSS</div>
                <div className={s.skill}>MySql</div>
                <div className={s.skill}>Node</div>
                <div className={s.skill}>Express</div>
                <div className={s.skill}>Bootstrap</div>
                <div className={s.skill}>Material-UI</div>
            </div>
        </div>
    )
};