import playIcon from "../../../assets/img/word-desc/play-icon.png";

import "./audio-player.css";

const AudioPlayer = ({ data }) => {
  const phoneticsArr = data[0]?.phonetics;

  if (!phoneticsArr || phoneticsArr.length === 0) {
    return null;
  }

  return phoneticsArr.map((phonetic, i) => {
    const audioLinkString = phonetic.audio || "";
    const countryFromLink =
      audioLinkString.match(/-(ca|uk|us|au)/)?.[1]?.toUpperCase() || "UNKNOWN";

    if (!audioLinkString) return null;

    const audioSrc = data[0]?.phonetics?.[i]?.audio || "";

    const playAudio = () => {
      const audio = new Audio(audioSrc);
      audio.play();
    };

    return (
      <div className="word-desc__player">
        <h2>{countryFromLink}</h2>
        <button onClick={playAudio}>
          <img src={playIcon} alt="button listen audio" />
        </button>
        <h3>{data[0]?.phonetics?.[i]?.text}</h3>
      </div>
    );
  });
};

export default AudioPlayer;
