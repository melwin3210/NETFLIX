import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'

const GptMovieSuggestion = () => {
  const {searchedMovie} = useSelector(store=>store?.movies)
  if(!searchedMovie?.title) return null
  const arrayConvertMovie = [searchedMovie]
  
  return (
    <div className='flex bg-black bg-opacity-80 w-1/2 justify-center mt-10 m-auto'>
      <MoviesList title={searchedMovie.title} movies={arrayConvertMovie}></MoviesList>
      <MovieDetails  movieDetails={searchedMovie}/>
    </div>
  )
}

export default GptMovieSuggestion
