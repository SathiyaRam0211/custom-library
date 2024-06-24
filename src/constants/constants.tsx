import { NavbarMenuItemProps, SongProps } from "../utils/util-interfaces";

export const labels = {
  BRAND: "Krisp",
};

export const navbarMenuItems: Array<NavbarMenuItemProps> = [
  {
    id: 1,
    name: "All",
    selected: true,
  },
  {
    id: 2,
    name: "Songs",
    selected: false,
  },
  {
    id: 3,
    name: "Artists",
    selected: false,
  },
  {
    id: 4,
    name: "Genres",
    selected: false,
  },
  {
    id: 5,
    name: "Playlists",
    selected: false,
  },
  {
    id: 6,
    name: "Settings",
    selected: false,
  },
];

export const sampleSongs: Array<any> = [
  {
    name: "Espresso",
    artist: "Sabrina Carpenter",
    album: "Single",
    genre: "Pop",
    duration: "2:55",
  },
  {
    name: "BLUE",
    artist: "Billie Eilish",
    album: "HIT ME HARD AND SOFT",
    genre: "Pop",
    duration: "5:43",
  },
  {
    name: "BIRDS OF A FEATHER",
    artist: "Billie Eilish",
    album: "HIT ME HARD AND SOFT",
    genre: "Pop",
    duration: "3:30",
  },
  {
    name: "Good Luck, Babe!",
    artist: "Chappell Roan",
    album: "Single",
    genre: "Pop",
    duration: "3:38",
  },
];
