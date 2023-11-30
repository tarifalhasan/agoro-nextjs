"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { RiFlashlightLine } from "react-icons/ri";
const VoteCard = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const pathToImage = "/images/congrage.png";
  return (
    <div>
      <div
        style={{
          background: `url(${pathToImage}), lightgray 50%`,
        }}
        className=" w-full m-0 p-0 !bg-contain relative !bg-top !bg-no-repeat  !max-w-full block !mx-auto pb-[113%]  rounded-lg"
      >
        <div className="flex absolute left-0 right-0 bottom-0 h-[70px] px-4 items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar className="border border-orange-30">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className=" text-title-2 text-white">RAREFACTION</p>
          </div>
          <div className="flex flex-col items-center">
            <RiFlashlightLine className=" w-4 h-4 text-white" />
            <p className=" text-pragraph-1 text-white font-medium">1240</p>
          </div>
        </div>
      </div>
      <div className="flex relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-orange-30 after:h-[1.5px] after:w-[34%]  border border-orange-50  h-[49px] px-4 items-center justify-between">
        <div className="flex items-center gap-1">
          <Avatar className="border border-orange-30 w-[35px] h-[35px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className=" text-title-2 text-white">UNLIMITE</p>
        </div>
        <button onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? (
            <FaPauseCircle className="w-6 h-6 text-orange-30" />
          ) : (
            <FaPlayCircle className="w-6 h-6 text-orange-30" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VoteCard;
