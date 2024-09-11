import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'
import ShimmerUI from './ShimmerUI'
import useMovieDetails from '../hooks/useMovieDetails'
import VideoCard from './youtube/VideoCard'

const GptMovieSuggestion = ({video, setVideo, setTrailer, trailer}) => {
  
  const {searchedMovie} = useSelector(store=>store?.movies)
  const goBackOrTrailerToggle = async () =>{
    setVideo(!video)
    if(!video){
      const dataa = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchedMovie.searchedMovie+'%20movie%20trailer&key='+ process.env.REACT_APP_YOUTUBE_API_KEY)
    const json = await dataa.json()
     let r = json?.items?.map((data)=>{
      if(data?.snippet?.title?.toLowerCase().includes('official')){
        return data.id.videoId
      }else{
        return null
      }
    }).filter(Boolean)
    setTrailer(r)
    }else{
      setTrailer([])

    }
  }
  
  
  useMovieDetails(searchedMovie)
  if(searchedMovie?.searching) return <ShimmerUI page={'movieSearch'} />
  if((!searchedMovie?.title) && (!searchedMovie?.Error)) return null
  const arrayConvertMovie = [searchedMovie]

  return (
    <div>
    <div>
      { !video &&  <div className='flex bg-black bg-opacity-80 md:w-1/2 justify-center mt-10 m-auto'>
      {<MoviesList title={searchedMovie.title || searchedMovie.Error} movies={arrayConvertMovie}></MoviesList>}
      { trailer && <MovieDetails  movieDetails={searchedMovie}/>}
      
    </div>}
    <div className='md:w-1/2 justify-center m-auto'>
      <button className='bg-red-500 text-white w-full h-12 ' onClick={ goBackOrTrailerToggle }>{ video? "Go Back" : "Watch Trailer"}</button>
      { trailer.length === 0 && video && <ShimmerUI page={'movieSearch'} />}
       <div className='w-full'>{video && trailer?.length>=1 && <VideoCard trailerId={trailer} />}</div>
    </div>

    </div>
     
    </div>
    
  )
}

export default GptMovieSuggestion
