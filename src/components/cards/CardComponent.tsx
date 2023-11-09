'use client'
import React from 'react'
import type { Card, CardProduct } from '@/app/types'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'

const CardComponent = ({ card }: { card: Card }) => {
    const { addToCart } = useCart()
    const handleClick = () => {
        const product: CardProduct = { card, amount: 1 }
        addToCart(product)
    }

    return (
        <div className='w-full text-xs '>
            <div className='flex gap-2 py-1 justify-center'>
                <span title={card.stock > 0 ? 'In stock' : 'Out of stock'} className=''>{card.stock > 0 ? <svg className="w-4 h-4 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg> : <svg className="w-4 h-4 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>}</span>
                <span><strong>{card.name}:</strong> £{card.price}</span>
            </div>
            <Link href={'/cards/' + card.id}>
                <img src={card.image} className='w-full rounded-2xl rou border-black border' />
            </Link>
            <div className={'flex justify-around  items-center py-1 ' + (card.stock == 0 ? 'hidden' : 'show')}>
                <span>
                    Amount: <input type="number" className='w-8 p-0 h-5 text-xs text-center rounded' defaultValue="1" min="0" />
                </span>
                <button onClick={handleClick} className='bg-primary text-white hover:bg-gray-500  font-bold py-1 px-2 rounded'>
                    Add
                </button>
            </div>
        </div>
    )
}

export default CardComponent