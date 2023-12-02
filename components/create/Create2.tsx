"use client";
import { CloseCircle } from "@/assets/svg";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import * as z from "zod";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

// Validation schema
const FormSchema = z.object({
  arts: z.string({
    required_error: "Please upload a valid image or video",
  }),
});
const Create2 = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    arts: "",
  });
  const [isSelecttedCard, setIsSelecttedCard] = useState(false);
  const handleImageVideoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      console.log("Selected File:", file);
      setFormData({
        ...formData,
        arts: file.name,
      });
    }
  };

  const onSubmit = async () => {
    const validationResult = FormSchema.safeParse(formData);

    if (!validationResult.success) {
      setErrorMessage(validationResult.error.message);
      return;
    }
  };

  const uploadImage = ["/images/art1.png", "/images/art2.png"];

  const serachArts = [
    "/images/art3.png",
    "/images/art4.png",
    "/images/art5.png",
    "/images/art6.png",
    "/images/art7.png",
    "/images/art8.png",
  ];
  const selectedCard = [
    "/images/art5.png",
    "/images/art6.png",
    "/images/art7.png",
    "/images/art8.png",
    "/images/art8.png",
  ];
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
            />
          </label>
        </div>
        {/* map uploading images */}
        <div className=" grid grid-cols-2 gap-4">
          {uploadImage.map((item, i) => (
            <div
              key={i}
              className=" bg-no-repeat bg-contain bg-top block mx-auto w-full max-w-full relative  pt-[100%]"
              style={{
                backgroundImage: `url(${item})`,
                border: isSelecttedCard ? "`2px solid #FF7D08`" : "none",
              }}
            >
              {isSelecttedCard && (
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
              {serachArts.map((item, i) => (
                <div
                  key={i}
                  className=" bg-no-repeat bg-contain bg-top block mx-auto w-full max-w-full relative  pt-[100%]"
                  style={{
                    backgroundImage: `url(${item})`,
                    border: isSelecttedCard ? "`2px solid #FF7D08`" : "none",
                  }}
                >
                  {isSelecttedCard && (
                    <button className=" grid place-items-center bg-black rounded-full absolute top-[2%] right-[2%]">
                      <CloseCircle />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className=" pt-4 flex items-start justify-between gap-6">
              <div className="flex   basis-[75%] gap-4 flex-wrap">
                {selectedCard.map((item, i) => (
                  <div
                    key={i}
                    className=" bg-no-repeat bg-contain bg-top block mx-auto  max-w-full relative  w-[58px] pt-[12%]"
                    style={{
                      backgroundImage: `url(${item})`,
                      border: "2px solid #FF7D08",
                    }}
                  >
                    <button className=" grid place-items-center bg-black rounded-full absolute -top-[22%] -right-[19%]">
                      <CloseCircle />
                    </button>
                  </div>
                ))}
              </div>
              <h3 className=" text-heading-3 font-bold text-orange-30">
                4 TOTAL
              </h3>
            </div>
          </div>
        </div>
        <div className=" pt-5 space-y-4">
          <Button
            className=" w-full uppercase  border-orange-30 hover:border-white text-orange-30"
            variant={"outline"}
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
      </div>
    </div>
  );
};

export default Create2;
