import React from 'react'

const MovieDetails = ({movieDetails}) => {
  return (
    <div className='text-white'>
        <h1 className='font-bold'>Description</h1>
        <h2>{movieDetails.description}</h2>
        <h1 className='font-bold'>Year</h1>
        <h2>{movieDetails.year}</h2>
        <h1 className='font-bold'>Actors</h1>
        <h2>{movieDetails.actors}</h2>
        <h1 className='font-bold'>IMDB Rating</h1>
        <h2>{movieDetails.IMDBrating}</h2>
      
    </div>
  )
}

export default MovieDetails
