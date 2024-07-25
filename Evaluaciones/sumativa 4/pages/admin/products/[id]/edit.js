import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../../styles/EditProduct.module.css'; // Ajusta la ruta según sea necesario

export default function EditProduct() {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState({
        code: '',
        category: '',
        name: '',
        description: '',
        location: '',
        availability: '',
        timebox: ''
    });

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                router.push('/admin/products');
            } else {
                console.error('Error updating product:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.edith1}>Edicion del producto</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.labels}>
                    <h1>Codigo: </h1>
                    <input className={styles.inputs} type="text" name="code" value={product.code} onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <h1>Categoria: </h1>
                    <input className={styles.inputs} type="text" name="category" value={product.category} onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <h1>Nombre: </h1>
                    <input className={styles.inputs} type="text" name="name" value={product.name} onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <h1>Ubicacion: </h1>
                    <input className={styles.inputs} type="text" name="location" value={product.location} onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <h1>Disponibilidad: </h1>
                    <input className={styles.inputs} type="number" name="availability" value={product.availability} onChange={handleChange} />
                </label>
                <label className={styles.labels}>
                    <h1>Tiempo: </h1>
                    <input className={styles.inputs} type="text" name="timebox" value={product.timebox} onChange={handleChange} />
                </label>
                <label className={styles.desc}>
                    <h1>Descripcion: </h1>
                    <textarea type="text" name="description" value={product.description} onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit" className={styles.backButton}>Actualizar Producto</button>
            </form>
            <button className={styles.backButton} onClick={() => router.back()}>Volver</button>
        </div>
    );
}

