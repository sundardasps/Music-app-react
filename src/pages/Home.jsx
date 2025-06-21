import React, { useState, useMemo, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SongCard from "../components/SongCard";
import { useLocation } from "react-router-dom";
import { commonRoutes, search } from "../assets/assets";
import PlaylistCard from "../components/PlaylistCard";
import { localstorageKeys, songs } from "../data";
import { Modal, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const SongsList = ({
  title,
  searchQuery,
  handleSearchChange,
  clearSearch,
  filteredList,
  setSong,
  songData,
  cardBgColor,
}) => {
  return (
    <div className="d-flex flex-column justify-content-start gap-3 ">
      <h1 className="heading-main text-white mx-3">{title}</h1>
      <form
        className="bg-gray relative d-flex align-items-center justify-content-between px-3 gap-2 mx-3 responsive-search-bar"
        style={{ height: "48px", borderRadius: "8px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search Song, Artist"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            width: "100%",
          }}
          className="custom-no-focus-border"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0 5px",
            }}
          >
            ×
          </button>
        )}
        <img src={search} alt="search" />
      </form>

      {searchQuery && (
        <div
          className="mx-3 text-white"
          style={{ fontSize: "14px", opacity: 0.7 }}
        >
          {filteredList.length} result{filteredList.length !== 1 ? "s" : ""}{" "}
          found
        </div>
      )}

      <div
        className="hide-scrollbar"
        style={{ overflowY: "scroll", height: "74vh" }}
      >
        {filteredList.length > 0 ? (
          filteredList.map((id) => (
            <div className="fade-in">
              <PlaylistCard
                key={id}
                id={id}
                setSongForDetails={setSong}
                isSelected={songData?.id === id}
                cardBgColor={cardBgColor}
              />
            </div>
          ))
        ) : searchQuery ? (
          <div className="text-white text-center p-4" style={{ opacity: 0.7 }}>
            No songs found matching "{searchQuery}"
          </div>
        ) : null}
      </div>
    </div>
  );
};

function Home() {
  const path = useLocation().pathname;
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  const [showModal, setShowModal] = useState(false);
  const [cardBgColor, setCardBgColor] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const title = commonRoutes.find((route) => route.path === path)?.key;
  const [song, setSong] = useState(
    songs.find(
      (song) =>
        localStorage.getItem(localstorageKeys.currentPlayingSongId) === song.id
    )
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem(localstorageKeys.favourites)) || []
  );

  const [recentlyPlyd, setRecentlyPlyd] = useState([]);

  // Add inside your component
  useEffect(() => {
    const updatedRecently =
      JSON.parse(localStorage.getItem(localstorageKeys.recentlyPlayed)) || [];
    setRecentlyPlyd(updatedRecently);
  }, [path, song]);

  const getTopTracks = () => {
    const playCounts =
      JSON.parse(localStorage.getItem(localstorageKeys.songPlayCounts)) || {};
    const sortedSongIds = Object.entries(playCounts)
      .sort((a, b) => b[1] - a[1]) // Sort by play count descending
      .map(([id]) => id);
    return sortedSongIds;
  };

  const playlists = {
    foryou: [...songs.map((data) => data.id)],
    toptracks: getTopTracks(),
    favourites: favorites,
    "recently-played": recentlyPlyd,
  };

  const currentList = useMemo(
    () => playlists[path.split("/")[1]] || [],
    [path, favorites, recentlyPlyd] // Recompute when favorites change
  );

  const filteredList = useMemo(() => {
    if (!searchQuery.trim()) return currentList;

    return currentList.filter((id) => {
      const songItem = songs.find((s) => s.id === id);
      if (!songItem) return false;
      const query = searchQuery.toLowerCase();
      return (
        songItem.title?.toLowerCase().includes(query) ||
        songItem.artistName?.toLowerCase().includes(query)
      );
    });
  }, [currentList, searchQuery]);

  const songData = song || songs.find((song) => song.id === filteredList[0]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return ( 
    <div className="d-xl-flex justify-content-around p-xl-4 w-100 ">
      {/* Mobile Search/List Toggle Button */}
      {isSmallScreen && (
        <div className="d-flex justify-content-center my-4">
          <Button
            variant=""
            onClick={handleOpenModal}
            className="d-flex align-items-center gap-1 text-white "
          >
            Browse Songs
            <img src={search} width={20} height={20} alt="" className="mb-0" />
          </Button>
        </div>
      )}

      {/* Show Song List directly on md+ */}
      {!isSmallScreen && (
        <SongsList
          clearSearch={clearSearch}
          filteredList={filteredList}
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
          setSong={setSong}
          songData={songData}
          title={title}
          cardBgColor={cardBgColor}
        />
      )}

      {/* SongCard is always visible */}
      <SongCard
        song={songData}
        currentList={filteredList}
        setSong={setSong}
        onFavoriteChange={setFavorites}
        isSmallScreen={isSmallScreen}
        setCardBgColor={setCardBgColor}
      />

      {/* Modal for small screens */}
      <Modal
        contentClassName="bg-dark "
        show={showModal}
        onHide={handleCloseModal}
        fullscreen
      >
        <Modal.Header className="" closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <SongsList
            clearSearch={clearSearch}
            filteredList={filteredList}
            handleSearchChange={handleSearchChange}
            searchQuery={searchQuery}
            setSong={(song) => {
              setSong(song);
              handleCloseModal();
            }}
            songData={songData}
            title={title}
            cardBgColor={cardBgColor}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;
