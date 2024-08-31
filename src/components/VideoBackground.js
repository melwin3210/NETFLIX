import React from "react";

const VideoBackground = ({ trailer }) => {
  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
