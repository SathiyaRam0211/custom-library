import { SongProps } from "../../utils/util-interfaces";
import { SongRow } from "../../utils/util-styles";

const Song = ({ details = null }: { details?: SongProps | null }) => {
  return (
    <SongRow key={details?.name || "Name"} $header={details === null}>
      <span style={{ minWidth: "25%" }}>{details?.name || "Name"}</span>
      <span style={{ minWidth: "25%" }}>{details?.artist || "Artist"}</span>
      <span style={{ minWidth: "25%" }}>{details?.album || "Album"}</span>
      <span style={{ minWidth: "15%" }}>{details?.genre || "Genre"}</span>
      <span style={{ minWidth: "5%", textAlign: "right" }}>
        {details?.duration || "Duration"}
      </span>
    </SongRow>
  );
};

export default Song;
