import React from 'react'
import axios from 'axios';
import type { Card } from '@/app/types'

const RandomCardsWidget = async () => {
    let randomCards: Card[] = []
    try {
        const res = await axios.get(process.env.API_URL + '/cards/random')
        randomCards = await JSON.parse(res.data.cards);
    } catch (error) { }

    //console.log(randomCards)
    return (
        <div id='random-cards' className=''>
            <h2 className='text-2xl'>Random cards</h2>
            <div className='flex justify-around px-28 py-5'>
                {randomCards.map((card: Card) => (
                    <div key={card.id} className='w-1/6 text-xs'>
                        <div className='text-center py-2  flex justify-around'>
                            <span>Price: £{card.price}</span>
                            <span title='Availability' className=''>{card.stock > 0 ? <svg className="w-4 h-4 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg> : <svg className="w-4 h-4 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                            </svg>}</span>
                        </div>
                        <img src={card.image} className='rounded-xl w-full' />
                        <div className={'flex justify-around  items-center py-1 ' + (card.stock == 0 ? 'hidden' : 'show')}>
                            Amount: <input type="number" className='w-8 p-0 h-5 text-xs text-center' defaultValue="1" min="0" />
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded'>
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RandomCardsWidget