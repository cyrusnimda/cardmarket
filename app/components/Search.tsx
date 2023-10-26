'use client'
import React, { use } from 'react'
import { useState } from "react"
import type { Card } from '@/app/types'
import axios from 'axios';
import config from '../config';
import Link from 'next/link'

const { api_url } = config;

const Search = () => {
    const [criteria, setCriteria] = useState('');
    const [searchResult, setSearchResult] = useState<Card[]>([]);

    const search = () => {
        if (!criteria) return

        const search_url = api_url + '/cards/search/' + criteria;
        console.log(criteria)
        // const res = await axios.get(api_url + '/cards/search/' + criteria)
        // const cards: Card[] = await JSON.parse(res.data.cards);

        axios.get(search_url)
            .then((response) => {
                console.log(response)
                return JSON.parse(response.data.cards)
            })
            .then((cards) => {
                console.log(cards)
                setSearchResult(cards)
            });
    }

    return (
        <div id="search" className='flex'>
            <input className='w-64 rounded-lg text-black' type="text" value={criteria} onChange={(e) => setCriteria(e.target.value)} />
            <button onClick={(e) => search()} className='rounded-lg bg-cuaternary text-black px-2 ml-1 mr-4 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>

            <div className='absolute p-0 m-0 h-0'>
                <ul className='relative bg-white text-black w-64 top-12 rounded-lg px-2'>
                    {searchResult.map((card: Card) => (
                        <li key={card.id}>
                            <Link href={'/cards/' + card.id}>
                                <span>{card.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Search