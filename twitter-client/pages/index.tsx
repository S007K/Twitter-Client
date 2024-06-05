import React from 'react'
import FeedCard from '@/components/FeedCard';
import SideBar from '@/components/SideBar';


export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 px-12 ml-7"> 
        <SideBar/>
      </div>
      <div className="col-span-5 border-[0.1px] border-zinc-800">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
