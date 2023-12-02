"use client";
import { FC, useState } from "react";
import MusicCard from "../common/MusicCard";
import ImageSlider from "../common/VoteSlider";
import { Button } from "../ui/button";

const ArtsData = [
  "/images/art3.png",
  "/images/art4.png",
  "/images/art5.png",
  "/images/art6.png",
  "/images/art7.png",
  "/images/art8.png",
];

interface Crete2Props {
  formData: {
    arts: string[];
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      arts: string[];
    }>
  >;
  onNext: () => void;
  onPrevious: () => void;
}
const Create3: FC<Crete2Props> = ({
  formData,
  setFormData,
  onNext,
  onPrevious,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [selectedArt, setSelectedArt] = useState<string[]>([]);
  const [UploadFiles, setUploadFiles] = useState<File[]>([]);

  const handleArtSelection = (selectedItem: string) => {
    const isSelected = selectedArt.includes(selectedItem);

    if (isSelected) {
      const updatedSelection = selectedArt.filter(
        (item) => item !== selectedItem
      );
      setSelectedArt(updatedSelection);
    } else {
      setSelectedArt([...selectedArt, selectedItem]);
    }
  };
  const handleImageVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files) {
      try {
        const selectedFileArray = Array.from(files);
        setUploadFiles(selectedFileArray);
        // Assuming a backend API for file upload (you would replace 'uploadEndpoint' with your actual endpoint)
        // const formData = new FormData();
        // formData.append("file", file);

        // // Send the file to the server
        // const response = await fetch("uploadEndpoint", {
        //   method: "POST",
        //   body: formData,
        // });

        // Handle response from the server as needed
        // If storing locally, you might use FileReader API or other methods
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const handleArtSelectRemove = (itemNameToRemove: string) => {
    const updatedSelection = selectedArt.filter(
      (item) => item !== itemNameToRemove
    );
    setSelectedArt(updatedSelection);
  };

  const onSubmit = async () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      arts: [...selectedArt],
    }));

    onNext();
  };

  return (
    <div className="s py-6">
      <div className=" space-y-5">
        <ImageSlider />
        <div className=" pt-5 space-y-4">
          <Button
            className=" w-full uppercase  border-orange-30 hover:border-white text-orange-30"
            variant={"outline"}
            onClick={onPrevious}
          >
            BACK
          </Button>
          <Button
            className=" w-full uppercase"
            type="button"
            onClick={onSubmit}
          >
            VOTE and publish
          </Button>
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
  );
};

export default Create3;
