import React from 'react'


const CardComponentSkeleton = () => {
    return (
        <div className='w-full text-xs animate-pulse'>
            <div className='flex gap-2 py-1 justify-center h-[24px]'></div>

            <div className='w-full rounded-2xl rou border-black border aspect-[1/1.38] bg-skeleton'></div>

            <div className={'flex justify-around  items-center py-1 h-[32px]'}></div>
        </div>
    )
}

export default CardComponentSkeleton