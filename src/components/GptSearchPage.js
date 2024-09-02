import React from 'react'
import GptSearchBoxTab from './GptSearchBoxTab'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img className='h-screen w-screen object-cover'
          src= {BG_URL}
          alt="Logo"
        ></img>
      </div>
      <div className=''>
      <GptSearchBoxTab></GptSearchBoxTab>
      <GptMovieSuggestion></GptMovieSuggestion>

      </div>
        
    </div>
  )
}

export default GptSearchPage
