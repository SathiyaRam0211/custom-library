import { ReactNode, createContext, useState } from "react";
import { PlayerContextProps, SongProps } from "../utils/util-interfaces";

export const PlayerContext = createContext<PlayerContextProps>({
  songsList: [],
  setSongsList: () => {},
});

PlayerContext.displayName = "PlayerContext";

export default ({ children }: { children: ReactNode }) => {
  const [songsList, setSongsList] = useState<Array<SongProps>>([]);
  return (
    <PlayerContext.Provider value={{ songsList, setSongsList }}>
      {children}
    </PlayerContext.Provider>
  );
};
