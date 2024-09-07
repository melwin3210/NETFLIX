import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'
import ShimmerUI from './ShimmerUI'

const GptMovieSuggestion = () => {
  const {searchedMovie} = useSelector(store=>store?.movies)
  if(searchedMovie?.searching) return <ShimmerUI page={'movieSearch'} />
  if(!searchedMovie) return null
  const arrayConvertMovie = [searchedMovie]

 
  
  return (
    <div className='flex bg-black bg-opacity-80 md:w-1/2 justify-center mt-10 m-auto'>
      {<MoviesList title={searchedMovie.title || searchedMovie.Error} movies={arrayConvertMovie}></MoviesList>}
      { searchedMovie.title && <MovieDetails  movieDetails={searchedMovie}/>}
    </div>
  )
}

export default GptMovieSuggestion
