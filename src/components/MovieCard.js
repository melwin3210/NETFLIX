import React from 'react'

const MovieCard = (movieData) => {
    console.log("card"+movieData );
    
    // const mv =  movieData.json()
    // console.log("posterr"+mv);
    
   //{movieData && console.log("Card",movieData?.movieData[0]?.moviePosterUrl);} 
    
  return (
    <div className='w-28 pr-4'>
        <img alt='Movie Cart' src={movieData.movieData}  ></img>
      
    </div>
  )
}

export default MovieCard
