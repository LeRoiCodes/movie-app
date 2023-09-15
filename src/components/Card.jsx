/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import Idmb from '../assets/idmb.png'
import Tomato from '../assets/tomato.png'
import movieI from '../assets/Movie.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Card( {movie} ) {
const [like, setLike] = useState("#D1D5DB")
const [liked, setLiked] = useState(false)
const handleClick = () => {
if (liked === false) {
setLike("#333")
setLiked(true)
} else{
  setLike("#D1D5DB")
  setLiked(false)
}
}
    const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    // console.log(url)
    const math = movie.vote_average * 10
    const info = movie.release_date
    const currentMovie = {
      image : url,
      title: movie.title,
      idmb: math,
      movie: "Movie",
      tomato: math,
      info: info
    }
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className='text-black mx-auto my-[20px] border-solid border-2 border-blue-400 w-[250px]' data-testid="movie-card">
        <div className='h-[370px] bg-cover' style={{backgroundImage:  `url(${currentMovie.image})` }} data-testid="movie-poster">
            <div className='flex justify-between p-3'>
                <p className='text-[#111827] text-[12px] font-bold p-1 bg-[#f3f4f6] rounded-[12px] opacity-80'>{currentMovie.movie}</p>
                <button className='bg-[#f3f4f6] p-1 rounded-[50%] opacity-80' onClick={handleClick}>
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill={like}/>
                    </svg>
                </button>
            </div>
        </div>
        <p className='text-[12px] text-[#9ca3af] font-bold mt-2 p-1' data-testid="movie-release-date">{currentMovie.info}</p>
        <p className='text-[18px] text-[#111827 font-bold] p-1' data-testid="movie-title">{currentMovie.title}</p>
        <div className='flex justify-between items-center mt-2 p-1'>
        <div className='flex items-center gap-2 h-[17px] mb-3'>
          <img src={Idmb} alt='idmb'/>
         <p className='text-sm'>{currentMovie.idmb}/100</p>
        </div>
        <div className=' flex  items-center gap-2 h-[17px]'>
          <img src={Tomato} alt='idmb'/>
        <p className='text-sm'> {currentMovie.tomato}%</p>
        </div>
      </div>
        {/* <p className='mt-2 text-[12px] text-[#9ca3af] font-bold'> {movie.genre}</p> */}
        </div>
        </Link>
  )
}

export default Card