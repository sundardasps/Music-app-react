import React, { useContext, useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import { ProgressBar } from "react-bootstrap";
import {
  backward,
  forward,
  minusOutline,
  pause,
  play,
  plusOutline,
  sound,
  soundMute,
  threedots,
} from "../assets/assets";
import { buttonDiretions, localstorageKeys, songs } from "../data";
import { getAverageColor } from "../lib";
import { useMediaQuery } from "react-responsive";

function SongCard({
  song,
  currentList = [],
  setSong,
  onFavoriteChange,
  setCardBgColor,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1410 });

  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem("playerVolume");
    return savedVolume !== null ? parseFloat(savedVolume) : 1;
  });

  // Create audio instance when song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(song?.musicUrl);
    audioRef.current.volume = volume;

    const handleTimeUpdate = () => {
      const currentAudio = audioRef.current;
      if (currentAudio && currentAudio.duration) {
        setProgress((currentAudio.currentTime / currentAudio.duration) * 100);
      }
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    // ✅ Auto-play new song
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.warn("Autoplay blocked:", error);
        setIsPlaying(false);
      });

    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [song]);

  // Update audio volume and store in localStorage
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    localStorage.setItem("playerVolume", volume.toString());
  }, [volume]);

  useEffect(() => {
    const songData = songs.find((item) => item.id === song?.id);
    setSong(songData);

    const favorites =
      JSON.parse(localStorage.getItem(localstorageKeys.favourites)) || [];
    setIsFavorite(favorites.includes(song?.id));

    getAverageColor(song?.thumbnail, (rgb) => {
      const matteColor = `rgb(${Math.floor(rgb[0] * 0.5)}, ${Math.floor(
        rgb[1] * 0.5
      )}, ${Math.floor(rgb[2] * 0.5)})`;
      setCardBgColor(matteColor); // ✅ Triggers re-render
      const gradient = `linear-gradient(to right, rgb(${rgb.join(",")}), #000)`;
      localStorage.setItem(localstorageKeys.bgGradient, gradient);
      document.body.style.background = gradient;
    });
  }, [song]);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handlePrevOrNext = (direction) => {
    const isForward = buttonDiretions.next === direction ? true : false;
    const currentIndex = currentList.indexOf(song?.id);

    if (currentIndex === -1) {
      // Current song not found in list
      return;
    }

    let selectedSongId;

    if (isForward) {
      // Going to next song
      selectedSongId = currentList[currentIndex + 1];
      const song = songs.find((song) => song.id === selectedSongId);
      setSong(song);
    } else {
      // Going to previous song
      selectedSongId =
        currentList[
          currentIndex === 0 ? currentList.length - 1 : currentIndex - 1
        ];
      const song = songs.find((song) => song.id === selectedSongId);
      setSong(song);
    }
  };

  const handleFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem(localstorageKeys.favourites)) || [];
    let updatedFavorites;

    if (favorites.includes(song?.id)) {
      updatedFavorites = favorites.filter((i) => i !== song?.id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, song?.id];
      setIsFavorite(true);
    }

    localStorage.setItem(
      localstorageKeys.favourites,
      JSON.stringify(updatedFavorites)
    );
    onFavoriteChange && onFavoriteChange(updatedFavorites); // Notify Home
  };

  return (
    <div
      className="d-flex flex-column gap-4 fade-in  w-md-100 m-auto song-card"
      style={{ visibility: song?.id ? "visible" : "hidden" }}
    >
      <div>
        <h1 className="heading-main text-white">{song?.title}</h1>
        <p
          className="text-gray "
          style={{
            fontFamily: '"Basier Circle", sans-serif',
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            
          }}
        >
          {song?.artistName}
        </p>
      </div>

      <div className="d-flex flex-column gap-3 ">
        <img
          src={song?.thumbnail}
          alt="song thumbnail"
          className="img-fluid rounded d-block  custom-thumbnail "
          width={20}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            borderRadius: "8px",
          }}
          // override with media query below
        />
      </div>
        <input
          type="range"
          min={0}
          max={audioRef.current?.duration || 0}
          step={0.1}
          value={audioRef.current?.currentTime || 0}
          onMouseDown={() => {
            setIsPlaying(!isPlaying);
            if (audioRef.current && !audioRef.current.paused) {
              audioRef.current.pause();
            }
          }}
          onMouseUp={(e) => {
            setIsPlaying(!isPlaying);
            const newTime = parseFloat(e.target.value);
            if (audioRef.current) {
              audioRef.current.currentTime = newTime;
              audioRef.current.play(); // Resume playback
              setIsPlaying(true);
            }
          }}
          onChange={(e) => {
            const newTime = parseFloat(e.target.value);
            if (audioRef.current) {
              audioRef.current.currentTime = newTime;
            }
          }}
          style={{
            height: "5px",
            accentColor: "#ffffff",
          }}
        />

      <div className="d-flex justify-content-between align-items-center mt-3 ">
        <Dropdown>
          <Dropdown.Toggle
            as="div"
            bsPrefix="custom-toggle" // disables Bootstrap's caret styles
            className="bg-gray d-flex justify-content-center align-items-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "100%",
              cursor: "pointer",
            }}
          >
            <img src={threedots} alt="menu" />
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item
              onClick={() => handleFavorite()}
              className="d-flex align-items-center gap-2"
            >
              <img
                src={isFavorite ? minusOutline : plusOutline}
                alt="Add to favorite"
                style={{ width: 16, height: 16 }}
              />
              <span className="mb-0">
                {isFavorite ? "Remove From" : "Add to"} favorite
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div
          className="d-flex justify-content-between align-items-center "
          style={{ width: "176px", height: "50px" }}
        >
          <img
            onClick={() => handlePrevOrNext(buttonDiretions.prev)}
            src={backward}
            alt="backward"
            style={{ cursor: "pointer" }}
          />
          <img
            onClick={handleTogglePlay}
            src={!isPlaying ? pause : play}
            alt="play/pause"
            style={{ cursor: "pointer" }}
          />
          <img
            src={forward}
            onClick={() => handlePrevOrNext(buttonDiretions.next)}
            alt="forward"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="d-md-flex gap-2 align-items-center">
          <div
            className="bg-gray d-flex justify-content-center align-items-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: 100,
              cursor: "pointer",
            }}
            onClick={() => setShowSlider((prev) => !prev)}
          >
            <img src={volume === 0 ? soundMute : sound} width={25} alt="menu" />
          </div>

          {showSlider && !isSmallScreen && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className={`volume-slider fade-in `}
              style={{
                height: "5px",
                width: 100,
                accentColor: "#ffffff",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            />
          )}
        </div>
      </div>
      {showSlider && isSmallScreen && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className={`volume-slider  fade-in`}
          style={{
            height: "5px",

            accentColor: "#ffffff",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        />
      )}
    </div>
  );
}

export default SongCard;
