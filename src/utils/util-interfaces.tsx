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
}
