import playIcon from "../../../assets/img/word-desc/play-icon.png";

import "./audio-player.css";

const AudioPlayer = ({ link, country, data }) => {
  const audioSrc = data[0]?.phonetics?.[link]?.audio || "";

  if (!audioSrc) return null;

  const playAudio = () => {
    const audio = new Audio(audioSrc);
    console.log(audio);
    audio.play();
    console.log(audio.play());
  };

  return (
    <div className="word-desc__player">
      <h2>{country}</h2>
      <button onClick={playAudio}>
        <img src={playIcon} alt="button listen audio" />
      </button>
    </div>
  );
};

export default AudioPlayer;
