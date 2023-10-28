import React from 'react'
import axios from 'axios';
import type { Card } from '@/app/types'
import CardComponent from './CardComponent'

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
            <div className='flex justify-around px-28 py-5 gap-10'>
                {randomCards.map((card: Card) => (
                    <div key={card.id}>
                        <CardComponent card={card} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RandomCardsWidget