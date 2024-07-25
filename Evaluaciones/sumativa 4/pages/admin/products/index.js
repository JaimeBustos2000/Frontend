import Link from 'next/link';
import Style from '../../../styles/adm.module.css';

export default function Products({ products }) {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Productos</h1>
            <table className={Style.productTable}>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Disponibilidad</th>
                        <th>Ubicación</th>
                        <th>Tiempo de devolucion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className={Style.tbody}>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.name} className={Style.productImage} />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.availability}</td>
                            <td>{product.location}</td>
                            <td>{product.timebox}</td>
                            <td>
                                <Link href={`/admin/products/${product.id}/edit`}>
                                    <button className={Style.buttons}>Editar</button>
                                </Link>
                                <Link href={`/api/products/${product.id}`}>
                                    <button className={Style.buttons}>Eliminar</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    return {
        props: {
            products,
        },
    };
}




