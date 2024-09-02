import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const nowPlayinMovies = useSelector((store)=> store?.movies?.upcommingMovies?.upcommingMovies[0]?.upcomingMovieData)
    const trendingMovies = useSelector((store)=> store?.movies?.upcommingMovies?.upcommingMovies[1].trendingMovies)
    
  return (
    <div className=' bg-black h-screen'>
        <div className='md:-mt-32 pl-4 md:pl-12 relative z-20'>
        <MoviesList title={"Upcoming Movies"} movies={nowPlayinMovies}></MoviesList>
        <MoviesList title={"Trending Movies"} movies={trendingMovies}></MoviesList>

        </div>
        
      
    </div>
  )
}

export default SecondaryContainer
