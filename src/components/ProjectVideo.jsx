import { useState } from 'react';
import s from '../styles/Proyect.module.css';
import styled from 'styled-components';
import YouTubePlayer from 'react-player/youtube';

export default function ProjectVideo (props) {
    const { img, title, description, video, repo } = props;
    const [ onVideo, setOnVideo ] = useState(false);
    return (
        <>
            <Container>
                <img src={img} alt='Imagen' className={`image`}/>
                <div>
                    <h2>{title}</h2>
                    <img src={img} alt='Imagen' className={`imagePhone`}/>
                    <p>{description}</p>
                    <div className={s.twoBtn}>
                        <button onClick={ () => setOnVideo(!onVideo) }
                            className={s.btn}
                            >Video
                        </button>
                        <button onClick={ () => window.location.href = repo}
                            className={s.btn}
                            >Repo
                        </button>
                    </div>
                </div>
            </Container>
            { onVideo ? <ModalVideo className={`${onVideo ? `active`:``}`}>
                <DivVideo>
                    <DivCloseButton>
                        <button 
                            className={s.btn}
                            onClick={()=> setOnVideo(!onVideo)}>X</button>
                    </DivCloseButton>
                    <YouTubePlayer
                        url={video}
                        controls
                        loop
                        muted
                    />
                </DivVideo>
            </ModalVideo> : null}
        </>
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

const ModalVideo = styled.div`
    position: fixed;
    top: 0;
    left: -100vw;
    z-index: 1;
    width: 80vw;
    height: 100vh;
    background-color: gray;
    &.active{
        top: 0;
        left: 10vw;
        // width: 100%;
        // height: 100%;
        // border-radius: 0 0 40% 0;
    }
`;

const DivVideo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DivCloseButton = styled.div`
    display: flex;
    width: 90%;
    justify-content: flex-end;
`;