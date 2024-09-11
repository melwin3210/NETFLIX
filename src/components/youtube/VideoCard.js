import React from "react";
import Header from "../Header";

const VideoCard = ({trailerId}) => {
  return (
    <div>
      
      <iframe className="w-full"
        width="560"
        height="315"
        src= {"https://www.youtube.com/embed/"+trailerId[0]}  
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
