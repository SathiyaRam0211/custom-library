import { Dispatch, SetStateAction } from "react";

export interface InputProps {
  $inputWidth?: string;
}

export interface ButtonProps {
  $theme?: string;
  $disabled?: boolean;
}

export interface SongRowProps {
  $header?: boolean;
}

export interface NavbarMenuItemProps {
  id: number;
  name: string;
  selected: boolean;
}

export interface SongProps {
  name: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
  lyrics: string;
  albumArt: string;
}

export interface PlayerContextProps {
  songsList: Array<SongProps>;
  setSongsList: Dispatch<SetStateAction<Array<SongProps>>>;
}
