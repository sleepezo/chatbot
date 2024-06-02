"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "/videos/next.mp4";

  return (
    <div>
      {/* <h1>my custome player</h1> */}
      <ReactPlayer
        className="p-3 rounded-xl mx-3"
        width="250px"
        height="200px"
        // url={videosrc}
        url="https://www.youtube.com/watch?v=QdxUZhLHZiA"
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
