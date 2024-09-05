import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { addSearchedMovie } from "../utils/movieSlice";
import { addMovieSearchSuggestion } from "../utils/searchSuggestionSlice";


const GptSearchBoxTab = () => {
    let searchText = useRef(null)
    const dispatch = useDispatch()
    const [query, setQuery] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const langKey = useSelector(store=>store?.config?.lang)
    let movieSuggestionsList = useSelector(store=>store?.suggestion?.movieSuggestions)

    const movienameSuggest = async (text) =>{
      setSelectedSuggestion(null);
      const suggestion = await fetch("http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q="+text)
      const respon = await suggestion.json()
        dispatch(addMovieSearchSuggestion(respon[1]))
    }
    
    

    const handleGptSearchClick = async (suggestion) =>{
      // Set the selected suggestion as the query
    setQuery(suggestion);
    // Optionally clear suggestions or perform any other actions
    setSelectedSuggestion(suggestion);

      
      
      
        // const gptQuery = "Act as a movie recomedation system and suggest some for the query " + searchText.current.value + " only give me names of 5 movies, comma separated like the example result given ahead. Example result: KGF, Leo, Vikram, Vaazha"
        // const chatCompletion = await client.chat.completions.create({
        //   messages: [{ role: 'user', content: gptQuery }],
        //   model: 'gpt-3.5-turbo',
        // }).then(()=>{
        //   console.log(chatCompletion.choices);

        // }).catch((err)=>{console.log(err);
        // })
      
          
        const data= await fetch("https://www.omdbapi.com/?apikey="+process.env.REACT_APP_OMDB_KEY+"&t="+searchText.current.value)       
         searchText.current.value = ''
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
    <><div className="pt-[35%] md:p-0 md:pt-[10%] flex justify-center">
    <form className="md:w-1/2 bg-black grid grid-cols-12 sm:text-sm " onClick={(e)=>e.preventDefault()}>
      <input
      ref={searchText}
        type="text"
        className="p-4 m-4 col-span-9"
        placeholder={lang[langKey]?.gptSearchPlaceHolder}
        onChange={(e)=>movienameSuggest(e.target.value)}
        
        
      ></input>
      <button onClick={handleGptSearchClick} className=" col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded-lg">{lang[langKey]?.search} 
      </button>
    </form>
    
  </div>
  {movieSuggestionsList.length > 0 && !selectedSuggestion &&<div className="md:p-0  flex justify-center ">
    
  <ul className="md:w-1/2 grid grid-cols-12   bg-gradient-to-r from-black  text-white">
  {movieSuggestionsList && movieSuggestionsList.map((movieName,i)=><li key={i} className="m-4 col-span-9" onClick={()=>(searchText.current.value=movieName) && handleGptSearchClick(movieName) }>{movieName}</li>)}
    
  </ul>
  </div>}
  </>
    
    
  );
};

export default GptSearchBoxTab;
