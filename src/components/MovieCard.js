import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSearchView } from '../utils/gptSlice'
import { addSearchedMovie, searchedMovieDetails } from '../utils/movieSlice'

const MovieCard = ({movieData}) => {
  const dispatch = useDispatch()
  return (
    <div onClick={()=>dispatch(addSearchedMovie(movieData.movie_name))} className='w-28 pr-4'>
        <img alt='Movie Cart' src={movieData.moviePosterUrl}  ></img>
        <p className='text-white'>{movieData.movieName?movieData.movieName:''}</p>
    </div>
  )
}

export default MovieCard
