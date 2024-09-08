import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { OMBD_API } from "../utils/constants";

const useMovieDetails = (searchText) => {
    
  const dispatch = useDispatch();

  

  const movieDetail = async (query) => {
    
    if(searchText||query){
        dispatch(
            addSearchedMovie({
              searching: "inProgress",
            })
          );
        const data = await fetch(
          OMBD_API +
              process.env.REACT_APP_OMDB_KEY +
              "&t=" +
             ( searchText || query)
          );
          const {
            Poster,
            Plot,
            Title,
            Year,
            Director,
            Actors,
            imdbRating,
            Error,
          } = await data.json();
          dispatch(
            addSearchedMovie({
              moviePosterUrl: Poster,
              description: Plot,
              title: Title,
              year: Year,
              director: Director,
              actors: Actors,
              IMDBrating: imdbRating,
              Error: Error,
            })
          );

    }

    
  };
  // useEffect(() => {
  //   movieDetail();
  // }, []);
  return {reFetch:movieDetail }
};

export default useMovieDetails;
