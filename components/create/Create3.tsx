"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
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
const slides = [
  "/images/art1.png",
  "/images/art2.png",
  "/images/art3.png",
  "/images/art4.png",
  "/images/art5.png",
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
  const router = useRouter();
  const onSubmit = async () => {
    router.push("/");
  };

  return (
    <div className="s py-6">
      <div className=" space-y-5">
        <ImageSlider slides={slides} />
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
