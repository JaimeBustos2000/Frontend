import { Inter } from "next/font/google";
import { useState, useEffect } from 'react';
import ProductTable from '../../components/ProductTable';
import Bienvenida from "../../components/Bienvenida";
import Link from 'next/link';
import styles from '../../styles/Home.module.css'; // Asegúrate de que el CSS esté en el archivo adecuado

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>

            <Bienvenida />

            <hr style={{ width: '100%' }} />
            <ProductTable products={products} />
            <hr style={{ width: '100%' }} />

            {/* Botón para ir al carrito */}
            <div className={styles['cart-button-container']}>
                <Link href="#carrito">
                    <button className={styles['cart-button']}>
                        Ir al Carrito
                    </button>
                </Link>
            </div>
        </div>
    );
}


