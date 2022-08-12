import s from '../styles/Proyect.module.css';
import styled from 'styled-components';

export const Proyect = (props) => {
    const { img, title, description, deploy, repo } = props;
    return (
        <Container>
            <img src={img} alt='Imagen' className={`image`}/>
            <div>
                <h2>{title}</h2>
                <img src={img} alt='Imagen' className={`imagePhone`}/>
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
        </Container>
    )
};

const Container = styled.div`
    width: 85%;
    margin: 0.3em;
    padding: 0.5em;
    border: 1px solid black;
    border-radius: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .image{
        width: 20vw;
        border-radius: 1em;
        margin: 0 0.5em;
        @media(max-width: 768px){
            display: none;
        }
    }
    .imagePhone{
        width: 40vw;
        border-radius: 1em;
        margin: 0 0.5em;
        padding: 0.5em 0.5em;
        @media(min-width: 768px){
            display: none;
        }
    }
`;