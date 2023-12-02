"use client";

import Container from "@/components/Container";
import Create2 from "@/components/create/Create2";
import Step1 from "@/components/create/Step1";
import UploadArt from "@/components/create/UploadArt";
import UploadMusic from "@/components/create/UploadMusic";
import { useState } from "react";

interface UploadTypeS {
  uploadType: "visual-art" | "music";
}
const Create = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [uploadType, setUploadType] = useState<UploadTypeS>();
  const [uploadMusicData, setUploadMusicData] = useState({
    title: "",
    music: "",
    tags: [] as string[],
  });
  const [uploadArtData, setUploadArtData] = useState({
    title: "",
    imageVideo: "",
    tags: [] as string[],
  });
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const selectUploadType = (value: UploadTypeS) => {
    setUploadType(value); // Set the uploadType state
    setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Container>
      <div className="flex flex-col min-h-screen">
        {currentStep === 0 && <Step1 onNext={selectUploadType} />}
        {currentStep === 1 && uploadType?.uploadType === "music" && (
          <UploadMusic
            formData={uploadMusicData}
            setFormData={setUploadMusicData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {currentStep === 1 && uploadType?.uploadType === "visual-art" && (
          <UploadArt formData={uploadArtData} setFormData={setUploadArtData} />
        )}

        {currentStep === 2 && <Create2 />}
      </div>
    </Container>
  );
};

export default Create;
