import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSearchView } from '../utils/gptSlice'
import { addSearchedMovie } from '../utils/movieSlice'

const MovieCard = ({movieData}) => {
  const dispatch = useDispatch()
  const movieCardClick = async  (movieName) => {
    dispatch(addSearchedMovie({
      searching:"inProgress"
    }))
    dispatch(toggleSearchView());
    const data= await fetch("https://www.omdbapi.com/?apikey="+process.env.REACT_APP_OMDB_KEY+"&t="+movieName) 
    const {Poster, Plot, Title, Year, Director, Writer, Actors, Language,imdbRating} = await data.json()
        dispatch(addSearchedMovie({
          moviePosterUrl:Poster,
          description:Plot,
          title:Title,
          year:Year,
          director:Director,
          actors:Actors,
          IMDBrating:imdbRating
        }))

  }
  return (
    <div onClick={()=>movieCardClick(movieData.movie_name)} className='w-28 pr-4'>
        {movieData.moviePosterUrl && <img alt='Movie Cart' src={movieData.moviePosterUrl}  ></img>}
        <p className='text-white'>{movieData.movieName?movieData.movieName:''}</p>
    </div>
  )
}

export default MovieCard
