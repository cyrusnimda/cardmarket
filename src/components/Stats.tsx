import React from 'react'

const Stats = async ({ title, total }: { title: string, total: string }) => {

    // wait 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('CardPage')

    return (
        <div className='w-64 h-28 bg-[#f2f0ee] border border-black rounded-xl flex flex-col justify-center items-center'>
            <span className='text-3xl font-bold'>{total}</span>
            <span className='text-sm'>{title}</span>
        </div>
    )
}

export default Stats