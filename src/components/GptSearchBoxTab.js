import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { addSearchedMovie } from "../utils/movieSlice";


const GptSearchBoxTab = () => {
    const searchText = useRef(null)
    const dispatch = useDispatch()
    const langKey = useSelector(store=>store?.config?.lang)

    const handleGptSearchClick = async () =>{
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
        //console.log(json);
        

        
       // console.log("data2 fetched success" + data?data.response:'empty');
    
    }     
    
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onClick={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
        ></input>
        <button onClick={handleGptSearchClick} className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[langKey]?.search} 
        </button>
      </form>
    </div>
  );
};

export default GptSearchBoxTab;
