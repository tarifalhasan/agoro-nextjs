"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface sliderImages {
  slides: string[];
  isCreate?: boolean;
  CreateHandler?: () => void;
}
const ImageSlider: FC<sliderImages> = ({
  slides,
  isCreate = false,
  CreateHandler,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative">
      <h3 className=" py-5 text-heading-3 text-center">
        Which art best matches this music?
      </h3>

      <div
        onClick={
          isCreate && currentIndex !== slides.length - 1
            ? undefined
            : CreateHandler
        }
        className={cn(
          "w-full m-0 p-0 !bg-contain relative !bg-top !bg-no-repeat  !max-w-full block !mx-auto pb-[103%] ",
          isCreate && currentIndex !== slides.length - 1 ? "" : "cursor-pointer"
        )}
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      >
        {isCreate && currentIndex !== slides.length - 1 ? (
          <div className="flex absolute left-0 right-0 bottom-[3%] h-[70px] px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <Avatar className="border border-orange-30">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className=" text-title-2 text-white">RAREFACTION</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex gap-4 top-4 justify-center py-2">
        {slides.slice(0, 8).map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl w-4 h-4 rounded-full cursor-pointer ${
              currentIndex === slideIndex ? "bg-orange-30" : "bg-orange-50"
            }`}
          ></div>
        ))}
      </div>
      <div className=" flex pt-5 gap-3 items-center justify-between">
        <Button
          className=" w-full uppercase  border-orange-30 hover:border-white text-orange-30"
          variant={"outline"}
          onClick={prevSlide}
        >
          PREVIOUS
        </Button>
        <Button
          className=" w-full uppercase  border-orange-30 hover:border-white text-orange-30"
          variant={"outline"}
          onClick={nextSlide}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
