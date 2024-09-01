import React from 'react'

const MovieCard = (movieData) => {
  return (
    <div className='w-28 pr-4'>
        <img alt='Movie Cart' src={movieData.movieData}  ></img>
    </div>
  )
}

export default MovieCard
