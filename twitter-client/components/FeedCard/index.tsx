import React from "react";
import Image from "next/image";
import { SlOptions } from "react-icons/sl";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { LuShare } from "react-icons/lu";







const FeedCard: React.FC = () => {
    return(
        <div className="border-t-[0.1px] border-zinc-800 p-4 hover:bg-slate-900  transition-all cursor-pointer">
            <div className="grid grid-cols-12 ">
                <div className="col-span-1">
                    <Image className="rounded-full" src="https://avatars.githubusercontent.com/u/102732447?v=4" alt="profile" height={50} width={50} />
                </div>
                <div className="pl-4  col-span-11">
                    <div className="flex justify-between items-center ">
                        <div className="font-bold">
                            <span>Shahrukh Khan</span>
                            <span className="pl-3 font-medium text-slate-400">@iamsrk</span>
                        </div>
                        <div><SlOptions className="text-gray-600 hover:bg-blue-100 transition-all h-fit w-fit p-2 rounded-full"/></div>
                    </div>
                    <p className="text-sm font-medium text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Accusamus fugit dolore quaerat? Ducimus qui excepturi molestiae sit nulla reprehenderit quos est sequi repellat, sapiente quidem fugit impedit, praesentium odit fugiat reiciendis itaque quia delectus dicta? Harum dolorem nihil placeat facilis, ex recusandae qui blanditiis quidem quod nesciunt necessitatibus fugit odit.
                    </p>
                    <div className="flex justify-between items-center text-xl mt-1 -ml-2 -mb-2  w-[90%] text-gray-600">
                        <MdOutlineChatBubbleOutline className="hover:bg-blue-100 transition-all h-fit w-fit p-2 rounded-full"/>
                        <AiOutlineRetweet className="hover:bg-green-100 transition-all h-fit w-fit p-2 rounded-full"/>
                        <FaRegHeart className="hover:bg-red-100 transition-all h-fit w-fit p-2 rounded-full"/>
                        <ImStatsBars className="hover:bg-blue-100 transition-all h-fit w-fit p-2 rounded-full"/>
                        <LuShare className="hover:bg-blue-100 transition-all h-fit w-fit p-2 rounded-full"/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;
