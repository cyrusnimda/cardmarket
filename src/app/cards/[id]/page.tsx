import React, { Suspense } from 'react'
import type { Card } from '@/app/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import CardComponent from '@/components/cards/CardComponent'
import PriceHistory from '@/components/plots/PriceHistory'
import Stats from '@/components/Stats'
import StatsSkeleton from './StatsSkeleton'
import PriceHistorySkeleton from '@/components/plots/PriceHistorySkeleton'

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
                        <em>Card&apos;s price are updated every month, depending of the format that card is being played, it will fluctuate more or less. </em>
                    </div>
                    <section className='border border-black'>
                        <Suspense fallback={<PriceHistorySkeleton />}>
                            <PriceHistory />
                        </Suspense>
                    </section>
                </div>
            </section>

            <section>
                <div className='flex justify-center gap-8 mt-8'>
                    <Suspense fallback={<StatsSkeleton />}>
                        <Stats title="Total visits" total="1.560" />
                    </Suspense>

                    <Suspense fallback={<StatsSkeleton />}>
                        <Stats title="People favourite" total="29" />
                    </Suspense>

                    <Suspense fallback={<StatsSkeleton />}>
                        <Stats title="Sold this month" total="5" />
                    </Suspense>
                </div>
            </section>
        </>
    )
}

export default CardPage