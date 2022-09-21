import { useState } from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiMysql, SiPostgresql, SiSequelize, SiPostman, SiFirebase } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import s from '../styles/Skills.module.css';
import styled from 'styled-components';

export const Skills = () => {
    const [tooltip, showTooltip] = useState(true);
    const sizeIcon = 40;
    return (
        <Container id="skills">
            <Card>
                <Tippy content='HTML 5'>
                    <div className={s.skill}><AiFillHtml5 size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='React'>
                    <div className={s.skill}><FaReact size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='Redux'>
                    <div className={s.skill}><SiRedux size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='CSS 3'>
                    <div className={s.skill}><DiCss3 size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='NodeJs'>
                    <div className={s.skill}><FaNodeJs size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='MySql'>
                    <div className={s.skill}><SiMysql size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='Bootstrap'>
                    <div className={s.skill}><FaBootstrap size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='PostgreSQL'>
                    <div className={s.skill}><SiPostgresql size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='Sequelize'>
                    <div className={s.skill}><SiSequelize size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='GitHub'>
                    <div className={s.skill}><BsGithub size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='Postman'>
                    <div className={s.skill}><SiPostman size={sizeIcon}/></div>
                </Tippy>
                <Tippy content='Express'>
                    <div className={s.skill}>Express</div>
                </Tippy>
                <Tippy content='Material-UI'>
                    <div className={s.skill}>Material-UI</div>
                </Tippy>
                <Tippy content='Firebase'>
                    <div className={s.skill}><SiFirebase size={sizeIcon}/></div>
                </Tippy>
            </Card>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    width: 50%;
    background-color: #edfafd;
    border-radius: 1em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media(max-width: 768px){
        width: 80%;
    }
`;