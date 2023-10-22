'use client'
import React from 'react'
import { useState } from 'react'
import type { CardProduct, Cart } from '@/app/types'

const totalCardPrice = (cart: Cart) => {
    let total = 0;
    cart.forEach((product: CardProduct) => {
        total += (product.card.price * product.amount)
    })
    return total.toFixed(2);
}

const ShoppingCart = ({ cartInitial }: { cartInitial: Cart }) => {
    const [visible, setVisible] = useState(false);
    const [cart, setCart] = useState(cartInitial);

    const deleteProduct = (product: CardProduct) => {
        const cartWithoutProduct: Cart = cart.filter((item) => item !== product);
        setCart(cartWithoutProduct);
    }

    const addProduct = (product: CardProduct) => {
        const cartWithProduct: Cart = [...cart, product]
        setCart(cartWithProduct);
    }

    return (
        <div>
            <a onClick={() => setVisible(true)} className="flex items-center hover:text-gray-200" href="#">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>

            </a>
            <div className='absolute '>
                <div id="cart" className={(visible ? "show" : "hidden") + " flex  flex-col z-10 relative top-12 right-48 bg-quinary divide-y divide-gray-100 border-gray-600 border-2 rounded-lg shadow w-72 h-48 dark:bg-gray-700"}>
                    <div className='rounded-t flex justify-between items-center px-2 bg-primary  text-white  text-xl border-b-2 border-black'>
                        <span>Cart</span>
                        <a className='hover:cursor-pointer' onClick={() => setVisible(false)}>
                            <svg className=" w-4 h-4 text-white-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                            </svg>
                        </a>

                    </div>
                    <ul className="rounded flex-1 py-0 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                        {cart.map((product: CardProduct) => (
                            <li key={product.card.id} className='flex justify-between px-2 py-1 bg-quinary hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                <span>{product.amount}x {product.card.name}</span>
                                <span>£{(product.card.price * product.amount).toFixed(2)}</span>
                                <button onClick={() => deleteProduct(product)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <div className='rounded-b text-center font-bold flex items-end justify-between px-2 py-1 bg-primary text-white'>
                        <span>Total: </span>
                        <span>£{totalCardPrice(cart)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart