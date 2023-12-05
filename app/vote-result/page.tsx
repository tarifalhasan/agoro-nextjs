"use client";

import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import MusicCard from "@/components/common/MusicCard";
import { Button } from "@/components/ui/button";
import CustomProogress from "@/components/ui/progress";

const VoteResult = () => {
  return (
    <Container>
      <div className="flex flex-col min-h-screen pb-20">
        <BottomNavigation />
        <div>
          <div className=" pt-5 flex flex-col items-center space-y-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
            >
              <g clipPath="url(#clip0_399_1685)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.4 25.6H51.2V19.2H38.4V25.6ZM12.8 25.6H25.6V19.2H12.8V25.6ZM16 35.2H48C48 57.6 16 57.6 16 35.2ZM6.4 57.6H57.6V6.4H6.4V57.6ZM0 64H64V0H0V64Z"
                  fill="#FF7D08"
                />
              </g>
              <defs>
                <clipPath id="clip0_399_1685">
                  <rect width={64} height={64} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className=" uppercase text-heading-3 text-white font-semibold">
              CONGRATULATIONS
            </h3>
            <p className=" text-title-1 font-normal">
              You voted for the most popular choice!
            </p>
          </div>
          <div className=" py-7 space-y-5">
            <CustomProogress progress={38} totaSats="112" />
            <CustomProogress progress={42} totaSats="112" />
            <CustomProogress progress={20} totaSats="112" />
          </div>
          <div className=" flex-col space-y-3">
            <Button
              variant={"outline"}
              className=" border-orange-30 w-full text-orange-30"
            >
              SHARE
            </Button>
            <Button className=" border !border-orange-30  w-full text-orange-30">
              NEXT
            </Button>
            <MusicCard
              song={{ title: "Song Title" }} // Replace with the actual song object
              index={0} // Replace with the actual index
              playPauseHandler={(index) => {
                /* pass the playPauseHandler function implementation */
              }}
              isPlaying={false} // Replace with the actual isPlaying state
              currentSongIndex={0} // Replace with the actual currentSongIndex
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VoteResult;
