import playIcon from "../../../assets/img/word-desc/play-icon.png";

import "./audio-player.scss";

const AudioPlayer = ({ data }) => {
  const phoneticsArr = data[0]?.phonetics;

  if (!phoneticsArr || phoneticsArr.length === 0) {
    return null;
  }

  return phoneticsArr.map((phonetic) => {
    const audioSrc = phonetic.audio || "";
    const countryFromLink = audioSrc.match(/-(ca|uk|us|au)/)?.[1].toUpperCase() || "UNKNOWN";

    if (!audioSrc) return null;

    const playAudio = () => {
      const audio = new Audio(audioSrc);
      audio.play();
    };

    return (
      <div className="word-desc__player">
        <h2 className="word-desc__player-country">{countryFromLink}</h2>
        <button className="word-desc__player-btn" onClick={playAudio}>
          <img className="word-desc__player-icon" src={playIcon} alt="button listen audio" />
        </button>
        <span className="word-desc__player-phonetic-text">{phonetic.text || "/unknown/"}</span>
      </div>
    );
  });
};

export default AudioPlayer;
