"use client";
import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import MusicCard from "@/components/common/MusicCard";
import VoteModal from "@/components/common/VoteModal";
import ImageSlider from "@/components/common/VoteSlider";

import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };
  return (
    <Container>
      <main className=" flex flex-col min-h-screen pb-20">
        <BottomNavigation />
        <div className="s py-6">
          <div className=" space-y-5">
            <ImageSlider />
            <div className=" pt-10 space-y-4">
              <VoteModal />
            </div>

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
      </main>
    </Container>
  );
}
