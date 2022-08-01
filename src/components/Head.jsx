import { Link, animateScroll as scroll } from "react-scroll";
import s from '../styles/Head.module.css';

export const Head = () => {
    const name = '< P/S >';
    return (
        <div className={s.container}>
            <div className={s.btn}>
                <Link
                    activeClass="active"
                    to="name"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >{name}
                </Link>
            </div>
            <div className={s.center}>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    ><div className={s.btn}>Sobre Mi</div>
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    ><div className={s.btn}>Habilidades</div>
                </Link>
                <Link
                    activeClass="active"
                    to="proyects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    ><div className={s.btn}>Proyectos</div>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    ><div className={s.btn}>Contacto</div>
                </Link>
            </div>
            <div className="download">
                <div className={s.btn}>Download</div>
            </div>
        </div>
    )
};