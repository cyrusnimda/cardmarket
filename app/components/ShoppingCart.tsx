'use client'
import React from 'react'
import { useState } from 'react'
import type { CardProduct, Card } from '@/app/types'

const ShoppingCart = () => {
    const card: Card = { id: 1, name: 'card 1', edition: 'edition 1', image: 'image 1', stock: 1, price: 1 }
    const product: CardProduct = { card: card, amount: 1 }

    const [cart, setCart] = useState<CardProduct[]>([])

    return (
        <div >
            <a className="flex items-center hover:text-gray-200" href="#">

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

                <div className='absolute'>
                    <div id="cart" className="z-10 relative top-28 right-24 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                            {cart.map((product: CardProduct) => (
                                <li key={product.card.id}>
                                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        {product.card.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
            <button onClick={() => {
                setCart([
                    ...cart,
                    product
                ])
            }}>
                add
            </button>
        </div>
    )
}

export default ShoppingCart