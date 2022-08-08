import image from '../img/foto_perfil.jpeg';
import s from '../styles/Name.module.css';
import styled from 'styled-components';

export const Name = () => {
    return (
        // <div className={s.container} id='name'>
        <Container id='name'>
            <div className={s.card}>
                <div className={s.imgDiv}>
                    <img src={image} alt="Foto Perfil"/>
                </div>
                <Hache1>Pablo Singh</Hache1>
                <Hache3>Pablo Singh</Hache3>
            </div>
        {/* </div> */}
        </Container>
    ) 
};

const Container = styled.div`
    max-width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hache1 = styled.h1`
    @media(max-width: 768px){
        display: none;
    }
`;

const Hache3 = styled.h3`
    @media(min-width: 768px){
        display: none;
    }
`;