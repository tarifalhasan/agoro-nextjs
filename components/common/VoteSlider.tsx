"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
const ImageSlider = () => {
  const slides = [
    "/images/art1.png",
    "/images/art2.png",
    "/images/art3.png",
    "/images/art4.png",
    "/images/art5.png",
  ];

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
        className=" w-full m-0 p-0 !bg-contain relative !bg-top !bg-no-repeat  !max-w-full block !mx-auto pb-[103%] "
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      >
        <div className="flex absolute left-0 right-0 bottom-[3%] h-[70px] px-4 items-center justify-between">
          <div className="flex items-center gap-1">
            <Avatar className="border border-orange-30">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className=" text-title-2 text-white">RAREFACTION</p>
          </div>
        </div>
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
