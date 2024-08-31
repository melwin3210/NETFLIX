import React from "react";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import VideoTile from "./VideoTile";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const mainMovie = useSelector((store) => (store.movies?store.movies.mainMovie:null));
  
  if(!mainMovie) return
  const {movieTrailerURL,movieName, description } = mainMovie

  return (
    <div>
        <VideoTile title={movieName} overview={description}  />
        <VideoBackground trailer={movieTrailerURL}/>
    </div>
  );
};

export default MainContainer;
