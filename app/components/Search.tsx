'use client'
import React, { use } from 'react'
import { useState } from "react"
import type { Card } from '@/app/types'
import axios from 'axios';
import config from '../config';
import Link from 'next/link'
import Image from 'next/image';

const { api_url } = config;

const Search = () => {
    const [criteria, setCriteria] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchResult, setSearchResult] = useState<Card[]>([]);

    
    const search = () => {
        const searchInput = document.getElementById('searchInput');
        if (!criteria) return

        const search_url = api_url + '/cards/search/' + criteria;

        axios.get(search_url)
            .then((response) => {
                return JSON.parse(response.data.cards)
            })
            .then((cards) => {
                setSearchResult(cards)
                setShowSearchResults(true)
                if(searchInput){
                    searchInput.focus();
                }
            });
    }

    const onSearchBlur = () => {
        if(!showSearchResults) return

        setTimeout(() => {
            setCriteria('')
            setShowSearchResults(false)
        }, 200)
    }

    const onSeatchCange = (e) => {
        setCriteria(e.target.value)
        setShowSearchResults(false)
    }

    return (
        <div id="search" className='flex'>
            <input 
                id="searchInput"
                className='w-64 h-10 border-0 pl-5 rounded-l-full text-black' 
                type="text" 
                value={criteria} 
                onChange={onSeatchCange} 
                onBlur={onSearchBlur}
            />
            
            <button onClick={(e) => search()} className='rounded-r-full border-l-[1px] border-black  bg-cuaternary text-black px-2 h-10 mr-4 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>

            <div className={(showSearchResults ? 'show' : 'hidden') + ' absolute p-0 m-0 h-0'} >
                <ul className='relative bg-white text-black w-96 top-12 rounded-lg p-2 z-10'>
                    {searchResult.map((card: Card) => (
                        <li key={card.id} >
                            <Link className='flex items-center my-3 mx-2 gap-3  hover:bg-gray-100 hover:font-bold' href={'/cards/' + card.id}>
                                <img className='w-14 h-[78px]' src={card.image} alt={card.name} />
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