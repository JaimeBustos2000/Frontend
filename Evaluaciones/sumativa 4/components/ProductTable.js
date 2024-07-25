import React, { useState, useEffect } from 'react';
import Style from '../styles/ProductTable.module.css';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProductCart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: Math.min(item.quantity + 1, product.availability) }
                        : item
                );
            } else {
                if (prevCart.length > 0) {
                    const firstItemLocation = prevCart[0].location;
                    if (product.location !== firstItemLocation) {
                        alert('Los productos deben estar en la misma ubicación.');
                        return prevCart;
                    }
                }
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const handleReduceQuantity = (productId) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === productId) {
                    const newQuantity = item.quantity - 1;
                    if (newQuantity <= 0) {
                        return null;
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(item => item !== null);
        });
    };

    const handleIncreaseQuantity = (productId) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === productId) {
                    const product = products.find(p => p.id === productId);
                    const newQuantity = Math.min(item.quantity + 1, product.availability);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const productAvailability = (products || []).reduce((acc, product) => {
        if (product && product.id && product.availability != null) {
            acc[product.id] = Number(product.availability);
        }
        return acc;
    }, {});

    const groupedCartItems = {};

    (cart || []).forEach(item => {
        if (item && item.id) {
            if (!groupedCartItems[item.id]) {
                groupedCartItems[item.id] = { ...item, quantity: 0 };
            }
            groupedCartItems[item.id].quantity += Number(item.quantity);

            const availableQuantity = productAvailability[item.id] || 0;
            if (groupedCartItems[item.id].quantity > availableQuantity) {
                groupedCartItems[item.id].quantity = availableQuantity;
            }
        }
    });

    const totalItems = Object.values(groupedCartItems).reduce((total, item) => total + (item.quantity || 0), 0);

    return (
        <div className={Style.products}>
            <hr style={{ width: '100%' }}/>

            {/* Carrito de productos*/}
            <div className={Style.cartContainer} id='carrito'>
                <strong>Carrito</strong>
                <ul className={Style.cartList}>
                    {Object.values(groupedCartItems).map((item, index) => (
                        <li key={index} className={Style.cartItem}>
                            <img src={item.image} alt={item.name} style={{ width: 50 }} />
                            <span>{item.code}</span>
                            <span>Cantidad: {item.quantity}</span>
                            <button className={Style.button_reduce} onClick={() => handleReduceQuantity(item.id)}>-</button>
                            <button className={Style.button_reduce} onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            <button className={Style.button_delete} onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

                <div className={Style.cartTotal}>
                    <strong>Total Items: {totalItems}</strong>
                </div>

                <div className={Style.cartActions}>
                    <button className={Style.button_delete} onClick={handleRemoveFromCart}>Solicitar</button>
                </div>
            </div>

            {/* Tabla de productos */}
            <div className={Style.container}>
                <table className={Style['table-fixed']}>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Disponibilidad</th>
                            <th>Sede</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(products || []).map(product => (
                            <tr key={product.id}>
                                <td><img className={Style.image} src={product.image} alt={product.name} style={{ width: 100 }} /></td>
                                <td>{product.name}</td>
                                <td className={Style.desc}>{product.description}</td>
                                <td>{product.availability}</td>
                                <td>{product.location}</td>
                                <td>
                                    <button
                                        className={Style.button}
                                        onClick={() => handleAddToCart(product)}
                                        disabled={cart.some(item => item.id === product.id)}
                                    >
                                        Añadir al Carrito
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <hr style={{ width: '100%' }} />
        </div>
    );
};

export default ProductCart;



