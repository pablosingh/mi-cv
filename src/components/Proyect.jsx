import s from '../styles/Proyect.module.css';

export const Proyect = (props) => {
    const { img, title, description, deploy, repo } = props;
    return (
        <div className={s.container}>
            <img src={img} alt='Imagen' className={s.imgProyect}/>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={s.twoBtn}>
                    <button onClick={ () => { 
                        window.location.href = deploy;
                    }}
                    className={s.btn}
                    >Deploy</button>
                    <button onClick={ () => { 
                        window.location.href = repo;
                    }}
                    className={s.btn}
                    >Repo</button>
                </div>
            </div>
        </div>
    )
};