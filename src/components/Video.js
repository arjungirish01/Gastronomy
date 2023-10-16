import React from "react";
import YouTube from "react-youtube";

export default function Video(){
  const videoId = 'watch?v=BnPFaT1ZaNI';
  const opts = {
    height: '390',
    width: '550',
    playerVars: {
      autoplay: 1, // 0 or 1 for autoplay
    },
  };

  return (
    <YouTube videoId={videoId} opts={opts} />
  );
};

