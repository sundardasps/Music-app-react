import React, { useEffect, useState } from "react";
import { localstorageKeys, songs } from "../data";
import { getAverageColor } from "../lib";

function PlaylistCard({ id, setSongForDetails, isSelected, cardBgColor }) {
  const [song, setSong] = useState(null);
  const [duration, setDuration] = useState(""); // to hold formatted duration

  useEffect(() => {
    if (!song?.musicUrl) return;

    const audio = new Audio();
    audio.src = song.musicUrl;

    audio.addEventListener("loadedmetadata", () => {
      const durationInSeconds = audio.duration;
      const minutes = Math.floor(durationInSeconds / 60);
      const seconds = Math.floor(durationInSeconds % 60)
        .toString()
        .padStart(2, "0");

      setDuration(`${minutes}:${seconds}`);
    });

    // Optional cleanup
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
    };
  }, [song?.musicUrl]);

  useEffect(() => {
    const songData = songs.find((song) => song.id === id);
    setSong(songData);
  }, [id]);

  useEffect(() => {
    const matteColor = localStorage.getItem(localstorageKeys.listCardBG);
    if (matteColor) {
      document.documentElement.style.setProperty("--hover-bg", matteColor);
    }
  }, []);

  const handleClick = () => {
    if (!song) return;

    if (isSelected) return;

    localStorage.setItem(localstorageKeys.currentPlayingSongId, song?.id);
    setSongForDetails(song); // updates the selected song

    let recentlyPlayedList =
      JSON.parse(localStorage.getItem(localstorageKeys.recentlyPlayed)) || [];

    // Remove if already present
    recentlyPlayedList = recentlyPlayedList.filter((item) => item !== song.id);

    // Add to top
    recentlyPlayedList.unshift(song.id);

    // Limit to 10 items
    recentlyPlayedList = recentlyPlayedList.slice(0, 10);

    localStorage.setItem(
      localstorageKeys.recentlyPlayed,
      JSON.stringify(recentlyPlayedList)
    );
    // top played songs count
    const playCounts =
      JSON.parse(localStorage.getItem(localstorageKeys.songPlayCounts)) || {};
    playCounts[song?.id] = (playCounts[song?.id] || 0) + 1;
    // Sort entries by play count (descending)
    const sortedEntries = Object.entries(playCounts)
      .sort((a, b) => b[1] - a[1]) // sort by count descending
      .slice(0, 10); // keep only top 10

    // Rebuild the object
    const top3PlayCounts = Object.fromEntries(sortedEntries);
    localStorage.setItem(
      localstorageKeys.songPlayCounts,
      JSON.stringify(top3PlayCounts)
    );

    getAverageColor(song.thumbnail, (rgb, darkMatteColor) => {
      const gradient = `linear-gradient(to right, rgb(${rgb.join(",")}), #000)`;
      const matteColor = `rgb(${Math.floor(rgb[0] * 0.5)}, ${Math.floor(
        rgb[1] * 0.5
      )}, ${Math.floor(rgb[2] * 0.5)})`;

      document.documentElement.style.setProperty("--hover-bg", matteColor);
      document.body.style.background = gradient;
      localStorage.setItem(localstorageKeys.listCardBG, darkMatteColor); // save dark matte
    });
  };

  return (
    <div
      onClick={handleClick}
      className=" d-flex align-items-center playlist-card justify-content-between p-3 bg-color-gray responsive-card"
      style={{
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: isSelected ? cardBgColor : "",
        width: "100%", // default for small screens
        height: "auto",
      }}
    >
      <div className="me-3">
        <img
          src={song?.thumbnail}
          alt="Playlist"
          style={{ width: 48, height: 48, borderRadius: "50%" }}
        />
      </div>

      <div className="flex-grow-1 align-items-center">
        <h6 className="fw-light text-white mb-1" style={{ fontSize: "16px" }}>
          {song?.title}
        </h6>
        <p className="text-gray mb-0" style={{ fontSize: "14px" }}>
          {song?.artistName}
        </p>
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-between gap-2 "
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-0 text-gray" style={{ fontSize: "18px" }}>
          {duration}
        </p>
      </div>
    </div>
  );
}

export default PlaylistCard;
