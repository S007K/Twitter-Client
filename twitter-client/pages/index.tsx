import React from 'react'
import { Inter } from "next/font/google";
import { BsTwitter } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { PiHashBold } from "react-icons/pi";
import { BsBellFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { MdBookmarks } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton{
  title: String;
  icon: React.ReactNode; 
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <HiMiniHome/>
  },
  {
    title: 'Explore',
    icon: <PiHashBold/>
  },
  {
    title: 'Notifications',
    icon: <BsBellFill/>
  },
  {
    title: 'Messages',
    icon: <RiMessage3Fill/>
  },
  {
    title: 'Bookmarks',
    icon: <MdBookmarks/>
  },
  {
    title: 'Profile',
    icon: <FaUserLarge/>
  }
]

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 px-12"> 
        <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full transition-all p-4 ml-4  cursor-pointer ">
          <BsTwitter />
        </div>
        <div className="mt-4 pr-4  text-xl">
            <ul>
              {sidebarMenuItems.map((item) => (
              <li key = {item.title} className="flex justify-start items-center gap-5 w-fit mx-4 pl-4 pr-6 py-1 mt-4 rounded-3xl  hover:bg-gray-800 cursor-pointer">
                <span className='text-2xl'>{item.icon}</span>
                <span>{item.title}</span>
                </li>
              ))}
            </ul>
          <button className=" text-lg font-semibold bg-[#1d9bf0] text-white hover:bg-[#1a8cd8] w-full mt-5 ml-3 px-4 py-3 rounded-full">Tweet</button>
        </div>
      </div>
      <div className="col-span-6 border-[0.1px] border-zinc-800"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
