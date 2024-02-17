import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsTwitch,
  BsTwitter,
} from "react-icons/bs";
import { Inter } from "next/font/google";
import FeedCard from "@/components/Feeds";
import { SlOptions } from "react-icons/sl";

export default function Home() {
  interface TwitterSideBar {
    title: string;
    icon: React.ReactNode;
  }
  const sideBarMenu: TwitterSideBar[] = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
    },
    {
      title: "Explore",
      icon: <BiHash />,
    },
    {
      title: "Notifications",
      icon: <BsBell />,
    },
    {
      title: "Messages",
      icon: <BsEnvelope />,
    },
    { title: "Bookmarks", icon: <BsBookmark /> },
    {title:"Twitter Blue",icon:<BiMoney/>},
    { title: "Profile", icon: <BiUser /> },
    { title: "More", icon: <SlOptions />}
  ];
  return (
    <>
      <div >
        <div className=" grid grid-cols-12 h-screen w-screen px-56">
          <div className=" col-span-3  pt-1 ">
            <div className=" text-2xl h-fit p-2 hover:bg-gray-600 rounded-full transition-all cursor-pointer w-fit">
              <BsTwitter />
            </div>
            <div className=" mt-2 text-xl font-semibold pr-4">
              <ul className=" space-y-3">
                {sideBarMenu.map((item) => {
                  return (
                    <li
                      className=" flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer"
                      key={item.title}
                    >
                      <span className=" text-2xl">{item.icon}</span>
                      <span>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
              <div>
              <button className=" bg-[#1d9bf0] p-4 rounded-full w-[80%] h-[60%] mt-5 hover:bg-sky-600 hover:text-slate-200">Tweet</button>
              </div>
            </div>
          </div>
          <div className=" col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-y-auto border-gray-600">
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
          </div>
          <div className=" col-span-3 "></div>
        </div>
      </div>
    </>
  );
}
