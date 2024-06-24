export const formatDuration = (secs: number = 0): string => {
  if (secs === 0) return "NA";
  const seconds = Math.round(secs);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};

export const generateMetaData = (trackInfo: any, formatInfo: any) => {
  const uint8Array = new Uint8Array(trackInfo?.picture[0]?.data);
  const blob = new Blob([uint8Array], { type: "image/png" });
  return {
    name: trackInfo?.title || "NA",
    artist: trackInfo?.artist || "NA",
    album: trackInfo?.album || "NA",
    genre: trackInfo?.genre?.join() || "NA",
    lyrics: trackInfo?.lyricist?.join() || "NA",
    duration: formatDuration(formatInfo?.duration || 0),
    albumArt: URL.createObjectURL(blob),
  };
};
