import Image from "next/image";
import LOGO from "/public/youtube-logo.png";
import { FaMicrophone } from "react-icons/fa6";
export default function NavBar() {
  return (
    <nav className="w-screen flex flex-row px-5 py-2 items-center gap-10 justify-between">
      <Image
        src={LOGO}
        alt="ytlogo"
        width={100}
        height={100}
        className="Object-contain"
      />
      <input
        type="text"
        className="text-zinc-100 rounded-full bg-zinc-800 w-[50%] px-10 h-fit py-2 focus:outline-none"
        placeholder="Search"
      />
      <div className=" bg-zinc-100 rounded-full p-3">
        <FaMicrophone />
      </div>

      <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
    </nav>
  );
}
