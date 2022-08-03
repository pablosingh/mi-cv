import { Link, animateScroll as scroll } from "react-scroll";
import pdf from '../pdf/Pablo_Singh_FullStack.pdf';
import s from '../styles/Head.module.css';

export const Head = () => {
    const name = '< P/S >';
    return (
        <div className={s.container}>
            <div className={s.center}>
                <Link
                    className={s.linkClass}
                    activeClass={s.active}
                    to="name"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >{name}
                    {/* // >Pablo */}
                </Link>
            </div>
            <div className={s.center}>
                <Link
                    className={s.linkClass}
                    activeClass={s.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Sobre Mi
                </Link>
                <Link
                    className={s.linkClass}
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Habilidades
                </Link>
                <Link
                    className={s.linkClass}
                    activeClass={s.active}
                    to="proyects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Proyectos
                </Link>
                <Link
                    className={s.linkClass}
                    activeClass={s.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >Contacto
                </Link>
            </div>
            <div className={s.center}>
                <a href={pdf} 
                    className={s.linkClass}
                    download="Pablo_Singh_FullStack.pdf"
                    >Download
                </a>
            </div>
        </div>
    )
};