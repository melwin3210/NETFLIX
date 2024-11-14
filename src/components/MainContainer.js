import React from "react";
import { useSelector } from "react-redux";
import VideoTile from "./VideoTile";
import VideoBackground from "./VideoBackground";
import useYoutubeApi from "../hooks/useYoutubeDataFetch";

const MainContainer = () => {
  const {youtubeApiFetch} = useYoutubeApi()
  const mainMovie = useSelector((store) => (store.movies?store.movies.mainMovie:null));
  if(!mainMovie){
    youtubeApiFetch()
  }

  if(!mainMovie) return
  const {movieTrailerURL,movieName, description } = mainMovie

  return (
    <div className="bg-black  pt-[30%] md:pt-0">
        <VideoTile title={movieName} overview={description}  />
        <VideoBackground trailer={movieTrailerURL}/>
    </div>
  );
};

export default MainContainer;
