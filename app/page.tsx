"use client";
import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import MusicCard from "@/components/common/MusicCard";
import VoteModal from "@/components/common/VoteModal";
import ImageSlider from "@/components/common/VoteSlider";
import Create2 from "@/components/create/Create2";
import Create3 from "@/components/create/Create3";
import { useState } from "react";

const slides = [
  "/images/art1.png",
  "/images/art2.png",
  "/images/art3.png",
  "/images/art4.png",
  "/images/art5.png",
  "/images/art6.png",
  "/images/create.png",
];
export default function Home() {
  const CreateHandler = () => {};
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectArt, setSelectArt] = useState<{ arts: string[] }>({
    arts: [] as string[],
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Container>
      <main className=" flex flex-col min-h-screen pb-20">
        {currentStep === 0 && (
          <>
            <BottomNavigation />
            <div className="s py-6">
              <div className=" space-y-5">
                <ImageSlider
                  slides={slides}
                  isCreate={true}
                  CreateHandler={handleNext}
                />
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
          </>
        )}
        {currentStep === 1 && (
          <Create2
            formData={selectArt}
            setFormData={setSelectArt}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {currentStep === 2 && (
          <Create3
            formData={selectArt}
            setFormData={setSelectArt}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </main>
    </Container>
  );
}
