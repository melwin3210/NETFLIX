import React from 'react'
import GptSearchBoxTab from './GptSearchBoxTab'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src= {BG_URL}
          alt="Logo"
        ></img>
      </div>
        <GptSearchBoxTab></GptSearchBoxTab>
        <GptMovieSuggestion></GptMovieSuggestion>
    </div>
  )
}

export default GptSearchPage
