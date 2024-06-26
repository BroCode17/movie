import Image from 'next/image'
import React from 'react'

export default async function MoviePage({params}) {
  const movieId = params.id

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)

  //Date forget to await 
  const data = await res.json()

//   console.log(data)
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`}
        height={300}
        width={500}
        className='rounded-lg'
        alt={data.title || data.name}
        style={{maxWidth: '100%', height: 'auto' , width: 'auto'}}
     
         />
         <div className='p-2'>
            <h2 className='text-lg mb-3 font-bold '>{data.title || data.name}</h2>
            <p className='text-lg mb-3'>{data.overview}</p>
            <p>
                <span className='font-semibold mr-1'>Date Released:</span>
                {data.release_date || data.first_air_date}
            </p>
            <p className='mt-3'>
            <span className='font-semibold mr-1 '>Rating:</span>
                {data.vote_count}</p>
         </div>
      </div>
    </div>
  )
}
