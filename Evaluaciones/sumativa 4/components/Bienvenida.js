import {inter} from 'next/font/google';
import Styles from '../styles/Bienvenida.module.css';
export default function Bienvenida() {
    return (
        <div className={Styles.gendiv}>
            <h1 className={Styles.Bienvenida}> BIENVENIDO A INACAP-LUDI</h1>


            <div className={Styles.message}>
                <h1>Estas preparado para tu nueva experiencia o deseas algun juego para pasar con tus amigos,</h1>
                <h2>en Inacap-Ludi tenemos todo lo que necesitas</h2>
            </div>
            <img src="/bg/role.jpg" alt="Logo" />
            <div className={Styles.text}>
                <h2 className={Styles.optext} >Revisa la gran variedad de productos que tenemos para ti y añadelos a un carrito</h2>
            </div>
        </div>
    );
}
