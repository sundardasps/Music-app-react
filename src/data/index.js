import song1 from "../assets/musics/Cartoon, Jéja - Why We Lose (feat. Coleman Trapp)   DnB   NCS - Copyright Free Music.m4a";
import song2 from "../assets/musics/Lost Sky - Dreams pt. II (feat. Sara Skinner)   Trap   NCS - Copyright Free Music.m4a";
import song3 from "../assets/musics/Lost Sky - Fearless pt.II (feat. Chris Linton)   Trap   NCS - Copyright Free Music.m4a";
import song4 from "../assets/musics/Spektrem - Shine   Progressive House   NCS - Copyright Free Music.m4a";
import song5 from "../assets/musics/Janji - Heroes Tonight (feat. Johnning)   Progressive House   NCS - Copyright Free Music.m4a";
import song6 from "../assets/musics/Aero Chord feat. DDARK - Shootin Stars   Trap   NCS - Copyright Free Music.m4a";
import song7 from "../assets/musics/DEAF KEV - Invincible   Glitch Hop   NCS - Copyright Free Music.m4a";
import song8 from "../assets/musics/Disfigure - Blank   Melodic Dubstep   NCS - Copyright Free Music.m4a";
import song9 from "../assets/musics/Prismo - Stronger   Future Bass   NCS - Copyright Free Music.m4a";
import song10 from "../assets/musics/Lensko - Let's Go!   House   NCS - Copyright Free Music.m4a";
import song11 from "../assets/musics/Robin Hustin x TobiMorrow - Light It Up (feat. Jex)   Future Bounce   NCS - Copyright Free Music.m4a";
import song12 from "../assets/musics/Unknown Brain - Superhero (feat. Chris Linton)   Trap   NCS - Copyright Free Music.m4a";
import song13 from "../assets/musics/Warriyo - Mortals (feat. Laura Brehm)   Future Trap   NCS - Copyright Free Music.m4a";

export const songs = [
  {
    id: "1",
    title: "Cartoon, Jéja - Why We Lose",
    thumbnail: "https://cdn-images.dzcdn.net/images/cover/a27847c9f7d76ecd70fdd896aaaf42cd/500x500-000000-80-0-0.jpg",
    musicUrl: song1,
    artistName: "Coleman Trapp",
  },
  {
    id: "2",
    title: "Lost Sky - Dreams pt. II",
    thumbnail: "https://i1.sndcdn.com/artworks-000546308880-i6lfz1-t500x500.jpg",
    musicUrl: song2,
    artistName: "Sara Skinner",
  },
  {
    id: "3",
    title: "Lost Sky - Fearless pt.II",
    thumbnail: "https://c.saavncdn.com/202/Fearless-Pt-II-Instrumental-2021-20210921101322-500x500.jpg",
    musicUrl: song3,
    artistName: "Chris Linton",
  },
  {
    id: "4",
    title: "Spektrem - Shine",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuV8gsJCye-ePKawszaJDaEV5VivBUbLbVDg&s",
    musicUrl: song4,
    artistName: "Gabriel Drew",
  },
  {
    id: "5",
    title: "Janji - Heroes Tonight",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcnC6b7Rm8S438L4MKIzwo5f88EzMYhh8vg&s",
    musicUrl: song5,
    artistName: "Janji & Johnning",
  },
  {
    id: "6",
    title: "Aero Chord feat. DDARK - Shootin Stars",
    thumbnail: "https://i.scdn.co/image/ab67616d00001e02a54f7e539b79835a1bf8d5b7",
    musicUrl: song6,
    artistName: "Aero Chord",
  },
  {
    id: "7",
    title: "DEAF KEV - Invincible",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIW7xuOVLd0Gw0Wyf2JJOY1HHon5kwUIQVA&s",
    musicUrl: song7,
    artistName: "DEAF KEV",
  },
  {
    id: "8",
    title: "Disfigure - Blank",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE75GbBe33M1kvG4K7H9l9bRnim5MhVGm0hQ&s",
    musicUrl: song8,
    artistName: "Disfigure",
  },
  {
    id: "9",
    title: "Prismo - Stronger",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKse2mIceu9qq58NEZrmvYLN-jrhxdbKszA&s",
    musicUrl: song9,
    artistName: "Prismo",
  },
  {
    id: "10",
    title: "Lensko - Let's Go!",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qmHkU69T9KKwbERxYASY0KNPihQiaX-YBA&s",
    musicUrl: song10,
    artistName: "Lensko",
  },
  {
    id: "11",
    title: "Robin Hustin x TobiMorrow - Light It Up",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0hiskw3yuVoM8IKEjtwgGGV28fiKKkQx3A&s",
    musicUrl: song11,
    artistName: "Robin Hustin, TobiMorrow",
  },
  {
    id: "12",
    title: "Unknown Brain - Superhero",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTM5ZLnSeL5gi3orcvcQXbnrh8GWupnpFeg&s",
    musicUrl: song12,
    artistName: "Unknown Brain, Chris Linton",
  },
  {
    id: "13",
    title: "Warriyo - Mortals",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKP-nyRADfLE32tMvNjSTxU0843XB-Pi28ug&s",
    musicUrl: song13,
    artistName: "Warriyo, Laura Brehm",
  },
];

export const localstorageKeys = {
  favourites: "favourites",
  topTracks: "topTracks",
  recentlyPlayed: "recentlyPlayed",
  bgGradient: "bgGradient",
  currentPlayingSongId: "currentPlayingSongId",
  songPlayCounts: "songPlayCounts",
  listCardBG: "listCardBG",
};

export const buttonDiretions = {
  prev: "prev",
  next: "next",
};
