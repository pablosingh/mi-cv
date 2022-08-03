import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import s from '../styles/Contact.module.css';

export const Contact = () => {
    const [ data, setData ] = useState({});

    const changing = e => {
        e.preventDefault();
        setData({ 
            ...data,
            [e.target.name]: e.target.value
         });
    };
    const submiting = e => {
        e.preventDefault();
        emailjs.init("fGpG85R7jRG9Ww6KQ");
        emailjs.send('cv-portafolio','template_qyu9glj', data)
            .then( res => console.log(res) )
            .catch( err => console.log(err) );
        setData({ name:'', email:'', message:'' })
    };

    return (
        <form className={s.container} id="contact" action='POST' onSubmit={submiting}>
            <div className={s.card}>
                <h1>Contacto</h1>
                <input type="text" placeholder='Nombre' 
                    name='name' onChange={changing}
                    className={s.inputTextarea}
                    value={data.name}/>
                <input type="text" placeholder='Email' 
                    name='email' onChange={changing}
                    className={s.inputTextarea}
                    value={data.email}/>
                <textarea placeholder='Message' name='message' 
                    onChange={changing}
                    className={s.inputTextarea}
                    value={data.message}/>
                <button
                    className={s.btn} 
                    type="submit" 
                    // onClick={submiting} 
                    >Enviar</button>
            </div>
        </form>
    )
};