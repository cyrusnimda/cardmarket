'use client';
import { createContext, useState } from "react";
import type { CardProduct, Cart } from '@/app/types'
import type { ReactNode } from 'react';

export type CartContextType = {
    cart: Cart;
    removeFromCart: (product: CardProduct) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [cart, setCart] = useState<Cart>([]);

    const addToCart = (product: CardProduct) => {
        // Check if the product is already in the cart
        const productInCart = cart.find((cardProduct) => cardProduct.card.id === product.card.id);

        if (productInCart) {
            // If the product is already in the cart, update the amount
            const newCart: Cart = cart.map((currentProduct) => currentProduct.card.id === product.card.id ? { ...productInCart, amount: productInCart.amount + 1 } : currentProduct)
            setCart(newCart);
            console.log(newCart.length)
            return newCart
        }

        // If the product is not in the cart, add it
        const newCart: Cart = [...cart, product];
        setCart(newCart);
        console.log(newCart.length)
        return newCart
    };

    const removeFromCart = (product: CardProduct) => {
        const newCart: Cart = cart.filter((currentProduct) => currentProduct.card.id !== product.card.id)
        setCart(newCart)
        return newCart
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}