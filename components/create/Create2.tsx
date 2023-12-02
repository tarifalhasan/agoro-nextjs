"use client";
import { CloseCircle } from "@/assets/svg";
import { FC, useState } from "react";
import { IoSearch } from "react-icons/io5";
import * as z from "zod";
import MusicCard from "../common/MusicCard";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

// Validation schema
const FormSchema = z.object({
  arts: z.string({
    required_error: "Please upload a valid image or video",
  }),
});

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
const Create2: FC<Crete2Props> = ({
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
        <div className=" space-y-2">
          <Label>Select art that matches the music</Label>
          <label className="w-full border-neutral-40 h-[150px] border flex flex-col items-center px-4 py-6  text-blue shadow-lg tracking-wide uppercase  bg-neutral-50 cursor-pointer hover:bg-blue hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={45}
              height={45}
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M7.83335 35.3333H37.1667V22.5H40.8334V37.1666C40.8334 37.6529 40.6402 38.1192 40.2964 38.463C39.9526 38.8068 39.4862 39 39 39H6.00002C5.51379 39 5.04747 38.8068 4.70366 38.463C4.35984 38.1192 4.16669 37.6529 4.16669 37.1666V22.5H7.83335V35.3333ZM26.1667 17V28H18.8334V17H9.66669L22.5 4.16663L35.3334 17H26.1667Z"
                fill="white"
              />
            </svg>

            <span className="mt-4 font-normal text-heading-3 leading-normal">
              Upload Image or Video File
            </span>
            <input
              type="file"
              name="imageVideo"
              onChange={handleImageVideoUpload}
              className="hidden"
              accept="image/*,video/*"
              multiple
            />
          </label>
        </div>
        {/* map uploading images */}
        <div className=" grid grid-cols-2 gap-4">
          {UploadFiles.map((item, i) => (
            <div
              onClick={() => handleArtSelection(item.name)}
              key={i}
              className=" bg-no-repeat bg-contain bg-top block mx-auto w-full max-w-full relative  pt-[98%]"
              style={{
                backgroundImage: `url(${URL.createObjectURL(item)})`,
                border: selectedArt.includes(item.name)
                  ? "2px solid #FF7D08"
                  : "2px solid transparent",
              }}
            >
              {selectedArt.includes(item.name) && (
                <button className=" grid place-items-center bg-black rounded-full absolute top-[2%] right-[2%]">
                  <CloseCircle />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className=" pt-4">
          <div className=" space-y-2">
            <h3 className=" text-heading-3 text-white text-center">
              SELECT ART FROM AGORA CATALOG
            </h3>
            <div className=" px-2 w-full h-[58px] border border-orange-30 flex items-center  gap-1">
              <IoSearch className=" w-6 h-6 text-orange-30" />
              <input
                type="text"
                className="flex-1 text-white placeholder:text-white text-title-2 border-none bg-transparent outline-none focus:outline-none"
                placeholder="What kind of art are you looking for?"
              />
            </div>
            <div className=" grid grid-cols-2 gap-5">
              {ArtsData.map((item, i) => (
                <div
                  key={i}
                  className=" bg-no-repeat bg-contain bg-top block mx-auto w-full max-w-full relative  pt-[98%]"
                  onClick={() => handleArtSelection(item)}
                  style={{
                    backgroundImage: `url(${item})`,
                    border: selectedArt.includes(item)
                      ? "2px solid #FF7D08"
                      : "2px solid transparent",
                  }}
                >
                  {selectedArt.includes(item) && (
                    <button className=" grid place-items-center bg-black rounded-full absolute top-[2%] right-[2%]">
                      <CloseCircle />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className=" pt-4 flex items-start justify-between gap-6">
              <div className=" grid grid-cols-4 gap-5   basis-[75%] ">
                {selectedArt.map((item, i) => (
                  <div
                    key={i}
                    className=" bg-no-repeat bg-contain bg-top block mx-auto  max-w-full relative  w-[58px] pt-[80%]"
                    style={{
                      backgroundImage: `url(${item})`,
                      border: "2px solid #FF7D08",
                    }}
                  >
                    <button
                      onClick={() => handleArtSelectRemove(item)}
                      className=" grid place-items-center bg-black rounded-full absolute -top-[22%] -right-[19%]"
                    >
                      <CloseCircle />
                    </button>
                  </div>
                ))}
              </div>
              <h3 className=" text-heading-3 font-bold text-orange-30">
                {selectedArt.length} TOTAL
              </h3>
            </div>
          </div>
        </div>
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
            CONFIRM ART CHOICES
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

export default Create2;
