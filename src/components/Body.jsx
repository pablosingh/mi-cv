
import { About } from './About';
import { Name } from './Name';
import { Contact } from './Contact';
import { Proyects } from './Proyects';
import { Skills } from './Skills';
import { NavBarPhone } from './NavBarPhone';
import s from '../styles/Body.module.css';
import DivAnimated from './DivAnimated';
import styled from "styled-components";

export const Body = () => {
    return (
        <div className={s.containerBody}>
            {/* <NavBarPhone />
            <Name/>
            <About/>
            <Skills/>
            <Proyects/>
            <Contact/> */}
            <NavBarPhone />
            <Box id='name'><DivAnimated element={ <Name/> }/></Box>
            <Box id='about'><DivAnimated element={ <About/> }/></Box>
            <Box id='skills'><DivAnimated element={ <Skills/> }/></Box>
            <Box id='proyects'><DivAnimated element={ <Proyects/> }/></Box>
            <Box id='contact'><DivAnimated element={ <Contact/> }/></Box>
        </div>
    )
};

const Box = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;