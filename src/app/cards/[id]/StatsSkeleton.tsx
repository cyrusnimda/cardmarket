import React from 'react'

const StatsSkeleton = () => {
    return (
        <div className='animate-pulse w-64 h-28 bg-skeleton border border-black rounded-xl flex flex-col justify-center items-center'>
            <span className='text-3xl font-bold'></span>
            <span className='text-sm'></span>
        </div>
    )
}

export default StatsSkeleton