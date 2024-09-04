import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,movies}) => {
   const movieData = movies
   
    
  return (
   movies && <div className='px-2'>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            
            <div className='flex '>
                {movieData && movieData.map(movie=><MovieCard key={movie.contentId} movieData={movie.moviePosterUrl}></MovieCard>)}
                 </div>
        </div>
        

      
    </div>
  )
}

export default MoviesList
