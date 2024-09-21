import React, { createContext, useState, useEffect } from 'react';
import all_products from '../assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cart, setCart] = useState(() => {
        // Recupera el carrito del localStorage al inicializar
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Efecto para guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            return prevCart.map(item => {
                if (item.id === productId) {
                    // Reduce la cantidad en 1
                    const newQuantity = item.quantity - 1;
                    // Si la nueva cantidad es 0, no lo incluimos en el nuevo carrito
                    if (newQuantity <= 0) {
                        return null; // Esto se manejará más adelante
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(item => item !== null); // Filtra los productos que fueron eliminados
        });
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getQuantityById = (productId) => {
        const product = cart.find(item => item.id === productId);
        return product ? product.quantity : 0; // Devuelve la cantidad o 0 si no está en el carrito
    };
    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const contextValue = {
        all_products,
        cart,
        addToCart,
        removeFromCart,
        getTotalItems,
        getQuantityById,
        getTotalQuantity,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;