import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  sideImage?: string;
  progress: number;
  totaSats: string;
}

const CustomProogress: FC<IProps> = ({ sideImage, progress, totaSats }) => {
  return (
    <div className=" flex  flex-row w-full items-center gap-2">
      <div
        className="w-[79px] h-[79px] relative !bg-top bg-contain ] bg-no-repeat m-0 p-0 block max-w-full"
        style={{
          backgroundImage: `url(${"/images/art1.png"})`,
        }}
      ></div>
      <div
        className={cn(
          ` h-[79px] relative overflow-hidden  flex items-center flex-1 justify-between `
        )}
      >
        <div
          className={cn(
            " absolute  z-10 h-full  inset-0",

            progress > 40 ? "bg-orange-50" : "bg-blue-150"
          )}
          style={{ width: `${progress}%` }}
        ></div>
        <p className=" text-sm font-bold z-50 pl-4 text-blue-50">{progress}%</p>
        <p className=" pr-5">{totaSats}SATS</p>
      </div>
    </div>
  );
};

export default CustomProogress;
