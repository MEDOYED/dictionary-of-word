import "./audio-player.css";

const AudioPlayer = ({ link, country, data }) => {
  return (
    <div className="word-desc__player">
      <h2>{country}</h2>
      <audio controls>
        <source src={data[0]?.phonetics?.[link]?.audio || ""} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
