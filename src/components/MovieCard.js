import React from 'react'

const MovieCard = (movieData,movieName) => {
  return (
    <div className='w-28 pr-4'>
        <img alt='Movie Cart' src={movieData.movieData}  ></img>
        <p className='text-white'>{movieData.movieName?movieData.movieName:''}</p>
    </div>
  )
}

export default MovieCard
