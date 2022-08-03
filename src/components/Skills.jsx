import { useState } from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiMysql, SiPostgresql, SiSequelize, SiPostman } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import s from '../styles/Skills.module.css';

export const Skills = () => {
    const [tooltip, showTooltip] = useState(true);
    return (
        <div className={s.container} id="skills">
            <div className={s.card}>
                <Tippy content='HTML 5'>
                    <div className={s.skill}><AiFillHtml5 size={50}/></div>
                </Tippy>
                <Tippy content='React'>
                    <div className={s.skill}><FaReact size={50}/></div>
                </Tippy>
                <Tippy content='Redux'>
                    <div className={s.skill}><SiRedux size={50}/></div>
                </Tippy>
                <Tippy content='CSS 3'>
                    <div className={s.skill}><DiCss3 size={50}/></div>
                </Tippy>
                <Tippy content='NodeJs'>
                    <div className={s.skill}><FaNodeJs size={50}/></div>
                </Tippy>
                <Tippy content='MySql'>
                    <div className={s.skill}><SiMysql size={50}/></div>
                </Tippy>
                <Tippy content='Bootstrap'>
                    <div className={s.skill}><FaBootstrap size={50}/></div>
                </Tippy>
                <Tippy content='PostgreSQL'>
                    <div className={s.skill}><SiPostgresql size={50}/></div>
                </Tippy>
                <Tippy content='Sequelize'>
                    <div className={s.skill}><SiSequelize size={50}/></div>
                </Tippy>
                <Tippy content='GitHub'>
                    <div className={s.skill}><BsGithub size={50}/></div>
                </Tippy>
                <Tippy content='Postman'>
                    <div className={s.skill}><SiPostman size={50}/></div>
                </Tippy>
                <Tippy content='Express'>
                    <div className={s.skill}>Express</div>
                </Tippy>
                <Tippy content='Material-UI'>
                    <div className={s.skill}>Material-UI</div>
                </Tippy>
            </div>
        </div>
    )
};