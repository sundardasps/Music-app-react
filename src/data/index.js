const BASE_URL = import.meta.env.VITE_SONGS_BASE_URL;
const song1 = `${BASE_URL}/v1750658036/Cartoon_J%C3%A9ja_-_Why_We_Lose_feat._Coleman_Trapp_DnB_NCS_-_Copyright_Free_Music_kzajgk.m4a`;
const song2 = `${BASE_URL}/v1750658044/Lost_Sky_-_Dreams_pt._II_feat._Sara_Skinner_Trap_NCS_-_Copyright_Free_Music_cpfpps.m4a`;
const song3 = `${BASE_URL}/v1750658034/Lost_Sky_-_Fearless_pt.II_feat._Chris_Linton_Trap_NCS_-_Copyright_Free_Music_p4odwa.m4a`;
const song4 = `${BASE_URL}/v1750658051/Spektrem_-_Shine_Progressive_House_NCS_-_Copyright_Free_Music_l8ukyu.m4a`;
const song5 = `${BASE_URL}/v1750658027/Janji_-_Heroes_Tonight_feat._Johnning_Progressive_House_NCS_-_Copyright_Free_Music_w4j01t.m4a`;
const song6 = `${BASE_URL}/v1750658027/Aero_Chord_feat._DDARK_-_Shootin_Stars_Trap_NCS_-_Copyright_Free_Music_wczgaw.m4a`;
const song7 = `${BASE_URL}/v1750658040/DEAF_KEV_-_Invincible_Glitch_Hop_NCS_-_Copyright_Free_Music_jln7jv.m4a`;
const song8 = `${BASE_URL}/v1750658039/Disfigure_-_Blank_Melodic_Dubstep_NCS_-_Copyright_Free_Music_at6xqn.m4a`;
const song9 = `${BASE_URL}/v1750658041/Prismo_-_Stronger_Future_Bass_NCS_-_Copyright_Free_Music_odgpna.m4a`;
const song10 = `${BASE_URL}/v1750658035/Lensko_-_Let_s_Go_House_NCS_-_Copyright_Free_Music_u1zld2.m4a`;
const song11 = `${BASE_URL}/v1750658047/Robin_Hustin_x_TobiMorrow_-_Light_It_Up_feat._Jex_Future_Bounce_NCS_-_Copyright_Free_Music_q1wbyk.m4a`;
const song12 = `${BASE_URL}/v1750658049/Unknown_Brain_-_Superhero_feat._Chris_Linton_Trap_NCS_-_Copyright_Free_Music_skqktl.m4a`;
const song13 = `${BASE_URL}/v1750658052/Warriyo_-_Mortals_feat._Laura_Brehm_Future_Trap_NCS_-_Copyright_Free_Music_l9jhbl.m4a`;

export const songs = [
  {
    id: "1",
    title: "Cartoon, Jéja - Why We Lose",
    thumbnail:
      "https://cdn-images.dzcdn.net/images/cover/a27847c9f7d76ecd70fdd896aaaf42cd/500x500-000000-80-0-0.jpg",
    musicUrl: song1,
    artistName: "Coleman Trapp",
  },
  {
    id: "2",
    title: "Lost Sky - Dreams pt. II",
    thumbnail:
      "https://i1.sndcdn.com/artworks-000546308880-i6lfz1-t500x500.jpg",
    musicUrl: song2,
    artistName: "Sara Skinner",
  },
  {
    id: "3",
    title: "Lost Sky - Fearless pt.II",
    thumbnail:
      "https://c.saavncdn.com/202/Fearless-Pt-II-Instrumental-2021-20210921101322-500x500.jpg",
    musicUrl: song3,
    artistName: "Chris Linton",
  },
  {
    id: "4",
    title: "Spektrem - Shine",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuV8gsJCye-ePKawszaJDaEV5VivBUbLbVDg&s",
    musicUrl: song4,
    artistName: "Gabriel Drew",
  },
  {
    id: "5",
    title: "Janji - Heroes Tonight",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcnC6b7Rm8S438L4MKIzwo5f88EzMYhh8vg&s",
    musicUrl: song5,
    artistName: "Janji & Johnning",
  },
  {
    id: "6",
    title: "Aero Chord feat. DDARK - Shootin Stars",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00001e02a54f7e539b79835a1bf8d5b7",
    musicUrl: song6,
    artistName: "Aero Chord",
  },
  {
    id: "7",
    title: "DEAF KEV - Invincible",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIW7xuOVLd0Gw0Wyf2JJOY1HHon5kwUIQVA&s",
    musicUrl: song7,
    artistName: "DEAF KEV",
  },
  {
    id: "8",
    title: "Disfigure - Blank",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE75GbBe33M1kvG4K7H9l9bRnim5MhVGm0hQ&s",
    musicUrl: song8,
    artistName: "Disfigure",
  },
  {
    id: "9",
    title: "Prismo - Stronger",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKse2mIceu9qq58NEZrmvYLN-jrhxdbKszA&s",
    musicUrl: song9,
    artistName: "Prismo",
  },
  {
    id: "10",
    title: "Lensko - Let's Go!",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qmHkU69T9KKwbERxYASY0KNPihQiaX-YBA&s",
    musicUrl: song10,
    artistName: "Lensko",
  },
  {
    id: "11",
    title: "Robin Hustin x TobiMorrow - Light It Up",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0hiskw3yuVoM8IKEjtwgGGV28fiKKkQx3A&s",
    musicUrl: song11,
    artistName: "Robin Hustin, TobiMorrow",
  },
  {
    id: "12",
    title: "Unknown Brain - Superhero",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTM5ZLnSeL5gi3orcvcQXbnrh8GWupnpFeg&s",
    musicUrl: song12,
    artistName: "Unknown Brain, Chris Linton",
  },
  {
    id: "13",
    title: "Warriyo - Mortals",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKP-nyRADfLE32tMvNjSTxU0843XB-Pi28ug&s",
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
