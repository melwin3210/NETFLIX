import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSearchView } from '../utils/gptSlice'
import { addSearchedMovie } from '../utils/movieSlice'
import useMovieDetails from '../hooks/useMovieDetails'

const MovieCard = ({movieData}) => {
  const dispatch = useDispatch()
  const { reFetch } = useMovieDetails();
  const movieCardClick = async  (movieName) => {
    dispatch(addSearchedMovie(movieName))
    reFetch(movieName);
    dispatch(toggleSearchView());

  }
  return (
    <div onClick={()=>movieCardClick(movieData.movie_name)} className='w-28 pr-4'>
        {movieData.moviePosterUrl && <img alt='Movie Cart' src={movieData.moviePosterUrl}  ></img>}
        <p className='text-white'>{movieData.movieName?movieData.movieName:''}</p>
    </div>
  )
}

export default MovieCard
