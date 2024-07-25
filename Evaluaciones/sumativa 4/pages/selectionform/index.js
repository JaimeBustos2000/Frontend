import Link from 'next/link';
import Styles from '../../styles/selectionform.module.css';

export default function Home() {
    return (
        <div className={Styles.home}>
            <h1>Administrador</h1>
            <p>Administre los productos o usuarios</p>
            <Link href="/admin/users">
                <button className={Styles.buttons}>Editar usuarios</button>
            </Link>
            <Link href="/admin/products">
                <button className={Styles.buttons}>Editar productos</button>
            </Link>
        </div>
    );
}
