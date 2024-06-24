import { PlaySection, StatusBar, SongsWrapper } from "../utils/util-styles";
import Song from "./library/Song";
import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";

const Dashboard = () => {
  const { songsList } = useContext(PlayerContext);

  return (
    <PlaySection>
      <StatusBar>
        <span>
          Total Songs : <strong>{songsList.length}</strong>
        </span>
      </StatusBar>
      <SongsWrapper>
        <Song key="Header" />
        {songsList.map((eachSong) => (
          <Song details={eachSong} key={eachSong.name} />
        ))}
      </SongsWrapper>
    </PlaySection>
  );
};

export default Dashboard;
