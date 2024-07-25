/* Asegurarse de instalar npm install react-responsive-carousel  antes de inicializar el proyecto*/
import { Inter } from "next/font/google";
import ImageCarousel from '../components/carrusel';
import styles from '../styles/principal.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home({ }) {


  return (
    <div className={styles.oferta}>
      <div className={styles.divtext}>
        <h1 className={styles.texto}>OFERTA EXCLUSIVA PARA NUESTROS ASOCIADOS </h1>
        <img src="/bg/domino.jpg" alt="domino" />
      </div>
      <div className="title">
        <h1>En inacap-ludi te presentamos las siguientes opciones de prestamo: </h1>
        <p className="sesion">- INICIA SESION YA Y OBTEN  -</p>
      </div>
      <ImageCarousel />
    </div>
  );
}

