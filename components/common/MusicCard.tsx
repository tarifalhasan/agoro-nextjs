"use client";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

interface MusicCardProps {
  song: {
    title: string;
    // Add other properties of the song object as needed
  };
  index: number;
  playPauseHandler: (index: number) => void;
  isPlaying: boolean;
  currentSongIndex: number;
}

const MusicCard: React.FC<MusicCardProps> = ({
  song,
  index,
  playPauseHandler,
  isPlaying,
  currentSongIndex,
}) => {
  return (
    <div>
      <div className="py-[14px] px-3 border border-orange-50 flex items-center justify-between">
        <p className="text-title-2">{song.title}</p>
        <button onClick={() => playPauseHandler(index)}>
          {isPlaying && currentSongIndex === index ? (
            <FaPauseCircle className="w-6 h-6 text-orange-30" />
          ) : (
            <FaPlayCircle className="w-6 h-6 text-orange-30" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
