"use client";
import React from "react";
import ReactPlayer from "react-player";

const Vidjson = [
  {
    id: 0,
    name: "Music",
    url: "https://www.youtube.com/watch?v=QdxUZhLHZiA",
  },
  {
    id: 1,
    name: "Food",
    url: "https://www.youtube.com/watch?v=BTSpxguSJZM",
  },
  {
    id: 2,
    name: "Games",
    url: "https://www.youtube.com/watch?v=QdxUZhLHZiA",
  },
];
export default function Vidts() {
  let videosrc = "/videos/next.mp4";
  return (
    <div className="flex flex-row  h-fit p-2 w-full">
      {Vidjson.map((item, idx) => (
        <p className="p-3 rounded-xl mx-3" key={idx}>
          {item.name}
          <ReactPlayer
            width="250px"
            height="200px"
            // url={videosrc}
            url={item.url}
            controls={true}
            // light is usefull incase of dark mode
            light={false}
            // picture in picture
            pip={true}
          />
          <source src={videosrc} type="video/mp4" />
        </p>
      ))}
    </div>
  );
}
