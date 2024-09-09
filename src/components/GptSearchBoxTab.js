import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { addMovieSearchSuggestion } from "../utils/searchSuggestionSlice";
import { IMBD_API, IMDB_API_PARAMS, PROXY_API, YOUTUBE_SEARCH_SUGGEST_API } from "../utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";

const GptSearchBoxTab = () => {
  let searchText = useRef(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const { reFetch } = useMovieDetails();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const langKey = useSelector((store) => store?.config?.lang);
  let movieSuggestionsList = useSelector(
    (store) => store?.suggestion?.movieSuggestions
  );

  const movienameSuggest = async () => {
    setSelectedSuggestion(null);
     const suggestion = await fetch(PROXY_API+IMBD_API+searchQuery+IMDB_API_PARAMS)
    // const suggestion = await fetch(YOUTUBE_SEARCH_SUGGEST_API + searchQuery);
    

    const respon = await suggestion.json();
    const movieName = respon?.d?.map((data)=>data.qid?data:'')

    movieName && dispatch(addMovieSearchSuggestion(movieName));
  };
  useEffect(() => {
    const timer = setTimeout(() => movienameSuggest() , 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleGptSearchClick = async (suggestion) => {
    reFetch(searchQuery).then(()=>{
      setSearchQuery('')
    })
    setSearch(true);
    setSelectedSuggestion(suggestion);
    dispatch(addMovieSearchSuggestion([]));
    setSearch(false);
    
  };

  return (
    <>
      <div className="pt-[35%] md:p-0 md:pt-[10%] flex justify-center">
        <form
          className="md:w-1/2 bg-black grid grid-cols-12 sm:text-sm "
          onClick={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[langKey]?.gptSearchPlaceHolder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button
            onClick={handleGptSearchClick}
            className=" col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded-lg"
          >
            {search ? "Loading" : lang[langKey]?.search}
          </button>
        </form>
      </div>
      {movieSuggestionsList.length > 0 && !selectedSuggestion && (
        <div className="md:p-0  flex justify-center ">
          <ul className="md:w-1/2 w-full  grid grid-cols-12 absolute bg-gradient-to-r from-black  text-white">
            {movieSuggestionsList &&
              movieSuggestionsList.map((movieName, i) => (
                <li
                  key={i}
                  className="m-4 col-span-9 flex hover:bg-gray-800 rounded-lg"
                  onClick={() =>
                    (searchText.current.value = movieName) &&
                    handleGptSearchClick(movieName)
                  }
                >
                  <img className="h-10 mr-2" src={movieName.i.imageUrl}></img>
                  
                  {movieName.l}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GptSearchBoxTab;
