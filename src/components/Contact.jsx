import s from '../styles/Contact.module.css';

export const Contact = () => {
    return (
        <form className={s.container} id="contact">
            <div className={s.card}>
                <h1>Contacto</h1>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message'/>
                <button type="submit" onClick={()=>{}} >Enviar</button>
            </div>
        </form>
    )
};