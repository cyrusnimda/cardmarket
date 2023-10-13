import React from 'react'
import axios from 'axios';

type Card = {
    id: number,
    name: string,
    edition: string,
    image: string,
    stock: number,
    price: number
}

const RandomCardsWidget = async () => {
    const res = await axios.get(process.env.API_URL + '/cards/random')
    const randomCards: Card[] = await JSON.parse(res.data.cards);
    //console.log(randomCards)

    return (
        <div id='random-cards' className=''>
            <h2 className='text-2xl py-5'>Random cards</h2>
            <div className='flex gap-2 justify-between'>
                {randomCards.map((card: Card) => (
                    <div key={card.id} className='w-1/5'>
                        <img src={card.image} className='rounded-xl w-full' />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RandomCardsWidget