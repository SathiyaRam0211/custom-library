import { SongProps } from "../../utils/util-interfaces";
import {
  RowImgStyle,
  SongRow,
  SmallRowStyle,
  BigRowStyle,
  NameRow,
} from "../../utils/util-styles";

const Song = ({ details = null }: { details?: SongProps | null }) => {
  return (
    <SongRow $header={details === null}>
      <NameRow style={BigRowStyle}>
        {details?.albumArt && (
          <img style={RowImgStyle} src={details?.albumArt} />
        )}
        {details?.name || "Name"}
      </NameRow>
      <span style={BigRowStyle}>{details?.artist || "Artist"}</span>
      <span style={BigRowStyle}>{details?.album || "Album"}</span>
      <span style={BigRowStyle}>{details?.genre || "Genre"}</span>
      <span style={SmallRowStyle}>{details?.duration || "Duration"}</span>
    </SongRow>
  );
};

export default Song;
