import React, { useState } from 'react'
import GptSearchBoxTab from './GptSearchBoxTab'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearchPage = () => {
  const [trailer, setTrailer] = useState([])
  const [video, setVideo] = useState(false)
  return (
    <div>
        <div className="absolute -z-10">
        <img className='h-screen w-screen object-cover fixed'
          src= {BG_URL}
          alt="Logo"
        ></img>
      </div>
      <div className=''>
      <GptSearchBoxTab setTrailer = {setTrailer} setVideo={setVideo}></GptSearchBoxTab>
      <GptMovieSuggestion setTrailer = {setTrailer} trailer={trailer} video={video} setVideo={setVideo}></GptMovieSuggestion>

      </div>
        
    </div>
  )
}

export default GptSearchPage
