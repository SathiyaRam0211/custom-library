import { PlaySection, StatusBar, SongsWrapper } from "../utils/util-styles";
import { sampleSongs } from "./constants/constants";
import Song from "./library/Song";

const Dashboard = () => {
  return (
    <PlaySection>
      <StatusBar>
        <span>
          Total Songs : <strong>{sampleSongs.length}</strong>
        </span>
      </StatusBar>
      <SongsWrapper>
        <Song />
        {sampleSongs.map((eachSong) => (
          <Song details={eachSong} />
        ))}
      </SongsWrapper>
    </PlaySection>
  );
};

export default Dashboard;
