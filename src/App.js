import { Head } from './components/Head';
import { Body } from './components/Body';
import style from './App.module.css';
import styled from 'styled-components';
// import image from './img/codigo_fondo.jpg';
// import image from './img/codigo_azul.jpg';
// import image from './img/codigo_verde2.jpg';
// import image from './img/campo_rosado.jpg';
import image from './img/androide_800.jpeg';
// import image from './img/chica.jpg';
// import image from './img/nodos.jpg';
// import image from './img/buses.jpg';
// import image from './img/androide2.jpg';

const Fondo = styled.div`
  min-height: 100vh;
  max-width: 100vw;
    &::before{
        content: '';
        position: fixed;
        top: 0vh;
        width: 100vw;
        height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;

function App() {
  return (
    <Fondo>
      <div className={style.App}>
        <Head />
        <Body/>
      </div>
    </Fondo>
  );
}

export default App;
