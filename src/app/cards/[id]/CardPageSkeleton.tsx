import React, { Suspense } from 'react'
import StatsSkeleton from './StatsSkeleton'
import CardComponentSkeleton from '@/app/components/cards/CardComponentSkeleton'
import PriceHistorySkeleton from '@/app/components/plots/PriceHistorySkeleton'

const CardPageSkeleton = () => {
    return (
        <>
            <section className='flex'>
                <div className='w-1/3 flex justify-center'>
                    <div className=' w-72'>
                        <CardComponentSkeleton />
                    </div>
                </div>
                <div className='w-2/3'>
                    <h1>Price history</h1>
                    <div>
                        <em>Card's price are updated every month, depending of the format that card is being played, it will fluctuate more or less. </em>
                    </div>
                    <section className='border border-black'>
                        <PriceHistorySkeleton />
                    </section>
                </div>
            </section>

            <section>
                <div className='flex justify-center gap-8 mt-8'>
                    <StatsSkeleton />
                    <StatsSkeleton />
                    <StatsSkeleton />
                </div>
            </section>
        </>
    )
}

export default CardPageSkeleton