import React from 'react'

const MovieDetails = ({movieDetails}) => {
  return (
    <div className='text-white'>
        <h1 className='font-bold'>Description</h1>
        <p1>{movieDetails.description}</p1>
        <h1 className='font-bold'>Year</h1>
        <p1>{movieDetails.year}</p1>
        <h1 className='font-bold'>Actors</h1>
        <p1>{movieDetails.actors}</p1>
        <h1 className='font-bold'>IMDB Rating</h1>
        <p1>{movieDetails.IMDBrating}</p1>
      
    </div>
  )
}

export default MovieDetails
