import Image from "next/image";
import NavBar from "@/components/page/NavBar";
import SideBar from "@/components/page/SideBar";
import Ta from "@/components/page/Tag";
import Tag from "@/components/page/Tagez";

import React from "react";
import VideoPlayer from "@/components/page/VideoPlayer";
import Vidts from "@/components/page/NewVidTestez";

export default function Home() {
  return (
    <main className="w-screen h-screen md:bg-zinc-900 bg-black ">
      {/* website content */}
      <NavBar />
      {/* buat jadi satu dari kiri kanan asing */}
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col">
          <Ta />
          <Tag />
          <div>
            {/* <h1>Video Player App</h1> */}
            {/* <VideoPlayer /> */}
            <Vidts />
          </div>
        </div>
        {/* <Ta /> */}
      </div>
    </main>
  );
}
