import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
const FeedCard: React.FC = () => {
  return (
    <>
      <div className=" border border-gray-600 p-5 border-r-0 border-l-0 border-b-0 hover:bg-slate-900 cursor-pointer transition-all">
        <div className=" grid grid-cols-12 gap-3">
          <div className=" col-span-1">
            <Image
              src={"https://avatars.githubusercontent.com/u/139235773?v=4"}
              alt="profile"
              width={50}
              height={50}
              className=" rounded-full"
            ></Image>
          </div>
          <div className=" col-span-11">
            <h5>Shivansh Singh</h5>
            <p>
              Help me get to 500 followers 🙏 Hey Twitter Algorithm, I would
              like to connect with people who work in these fields: - Frontend -
              Backend - Full stack - JavaScript/Typescript - ReactJS/NextJS -
              NodeJS Lets connect 🚀
            </p>
            <div className=" flex text-xl justify-between items-center w-[90%] mt-3">
            <div>
                <BiMessage/>
            </div>
            <div>
                <FaRetweet/>
            </div>
            <div>
                <AiOutlineHeart/>
            </div>
            <div>
                <BiUpload/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedCard;
