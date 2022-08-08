import { About } from './About';
import { Name } from './Name';
import { Contact } from './Contact';
import { Proyects } from './Proyects';
import { Skills } from './Skills';
import { NavBarPhone } from './NavBarPhone';
import s from '../styles/Body.module.css';

export const Body = () => {
    return (
        <div className={s.containerBody}>
            <NavBarPhone />
            <Name/>
            <About/>
            <Skills/>
            <Proyects/>
            <Contact/>
        </div>
    )
};