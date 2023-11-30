"use client";
import { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

type Song = {
  title: string;
  source: string;
};

const songs: Song[] = [
  {
    title: "Song 1",
    source: "/music/1.mp3",
  },
  {
    title: "Song 2",
    source: "/music/2.mp3",
  },
];

const Music = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentSong = songs[currentSongIndex];

  const playPauseHandler = (index: number) => {
    if (index === currentSongIndex && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSongIndex(index);
      if (audioRef.current) {
        audioRef.current.src = songs[index].source;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div>
      <div>
        <audio ref={audioRef} src={currentSong.source} />

        <div>
          <ul className="max-w-[85%] space-y-7 pt-7 mx-auto">
            {songs.map((song, index) => (
              <li
                className="py-[14px] px-3 border border-orange-50 flex items-center justify-between"
                key={index}
              >
                <p className="text-title-2">{song.title}</p>
                <button onClick={() => playPauseHandler(index)}>
                  {isPlaying && currentSongIndex === index ? (
                    <FaPauseCircle className="w-6 h-6 text-orange-30" />
                  ) : (
                    <FaPlayCircle className="w-6 h-6 text-orange-30" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Music;
