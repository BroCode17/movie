'use client'
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'

export default function SearchBox() {
    const[search, setSearch] = useState('')
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
    }
 
  return (
    <form className='max-w-6xl flex mx-auto items-center gap-5' onSubmit={handleSubmit}>
      <input type='text' placeholder='Serach movie...'  
      className=' h-14 rounded-md placeholder-gray-500  bg-transparent px-5 outline-none' 
      value={search}  
      onChange={(e) => setSearch(e.target.value)}/>
      <button className='text-grey-500 font-bold bg-amber-500 px-6 rounded-lg h-12' disabled={!search.length > 0}>Search</button>
    </form>
  )
}
