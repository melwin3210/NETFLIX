import { useDispatch } from "react-redux";
import { MAIN_MOVIES, UPCOMING_MOVIES_DATA } from "../utils/movieData";
import { useEffect } from "react";
import { addMainMovie, addUpcommingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
  
  const updateStore = async () => {
    // const upMovies = UPCOMING_MOVIES_DATA
    const upcommingMovie = await UPCOMING_MOVIES_DATA
    
    dispatch(
        addUpcommingMovies({
            upcommingMovies: upcommingMovie

        
    })
    )
  };
  useEffect(()=>{
    updateStore();
  },[])
};
export default useNowPlayingMovies;