import React from 'react'
import type { Card } from '@/app/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import CardComponent from '@/app/components/cards/CardComponent'
import PriceHistory from '@/app/components/plots/PriceHistory'

interface CardResponse {
    status: string;
    card: Card;
}

interface CardPageParams {
    id: string;
}

const getCard = (id: number) => {
    return axios.get<CardResponse>(process.env.API_URL + '/cards/' + id,)
        .then((response) => response.data.card)
}

const CardPage = async ({ params }: { params: CardPageParams }) => {
    const id = Number(params.id)
    const card = await getCard(id);
    return (
        <>
            <section className='flex'>
                <div className='w-1/3 flex justify-center'>
                    <div className=' w-72'>
                        <CardComponent card={card} />
                    </div>
                </div>
                <div className='w-2/3'>
                    <h1>Price history</h1>
                    <div>
                        <em>Card's price are updated every month, depending of the format that card is being played, it will fluctuate more or less. </em>
                    </div>
                    <section className='border border-black'>
                        <PriceHistory />
                    </section>
                </div>
            </section>

            <section>
                <div className='flex justify-center gap-8 mt-8'>
                    <div className='w-64 h-28 bg-[#f2f0ee] border border-black rounded-xl flex flex-col justify-center items-center'>
                        <span className='text-3xl font-bold'>1234</span>
                        <span className='text-sm'>Visits today</span>
                    </div>
                    <div className='w-64 h-28 bg-[#f2f0ee] border border-black rounded-xl flex flex-col justify-center items-center'>
                        <span className='text-3xl font-bold'>29</span>
                        <span className='text-sm'>People favourite</span>
                    </div>
                    <div className='w-64 h-28 bg-[#f2f0ee] border border-black rounded-xl flex flex-col justify-center items-center'>
                        <span className='text-3xl font-bold'>5</span>
                        <span className='text-sm'>Sold this month</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardPage