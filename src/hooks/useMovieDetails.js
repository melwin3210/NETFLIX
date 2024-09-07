import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieDetails = (searchText) => {
    console.log("ijscusah  ",searchText);
    
  const dispatch = useDispatch();

  

  const movieDetail = async () => {
    
    if(searchText){
        dispatch(
            addSearchedMovie({
              searching: "inProgress",
            })
          );
        const data = await fetch(
            "https://www.omdbapi.com/?apikey=" +
              process.env.REACT_APP_OMDB_KEY +
              "&t=" +
              searchText
          );
          const {
            Poster,
            Plot,
            Title,
            Year,
            Director,
            Writer,
            Actors,
            Language,
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
  useEffect(() => {
    movieDetail();
  }, []);
};

export default useMovieDetails;
