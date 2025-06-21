import logo from "./Logo.png";
import backward from "./backward.png";
import forward from "./forward.png";
import pause from "./pause.png";
import play from "./play.png";
import threedots from "./threedots.png";
import sound from "./volume-up-fill.svg";
import soundMute from "./volume-mute.svg";
import search from "./search.png";
import heartFill from "./heart-fill.svg";
import heartOutline from "./heart-outline.svg";
import plusOutline from "./plus-outline.svg";
import minusOutline from "./minus-outline.svg";

const commonRoutes = [
  { key: "For You", path: `/foryou` },
  { key: "Top Tracks", path: `/toptracks` },
  { key: "Favourites", path: `/favourites` },
  { key: "Recently Played", path: `/recently-played` },
];

export {
  logo,
  commonRoutes,
  backward,
  forward,
  pause,
  play,
  threedots,
  sound,
  search,
  soundMute,
  heartFill,
  heartOutline,
  plusOutline,
  minusOutline,
};
