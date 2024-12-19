import playIcon from "../../../assets/img/word-desc/play-icon.png";

import "./audio-player.css";

const AudioPlayer = ({ link, country, data }) => {
  const audioSrc = data[0]?.phonetics?.[link]?.audio || "";
  // const audioLinkString = data[0]?.phonetics?.[link]?.audio || "";
  // const countryFromLink = audioLinkString.slice(54).slice(0, -4).slice(-2).toUpperCase();
  // const isCa = audioLinkString.includes("-ca");
  // const isUk = audioLinkString.includes("-uk");
  // const isUs = audioLinkString.includes("-us");

  if (!audioSrc) return null;
  // if (!(countryFromLink === country)) return null;

  // const audioArr = data[0]?.phonetics;
  // const sto = audioArr.map((object) => {
  //   object.audio.includes("-ca") ? "CA" : object.audio.includes("-uk") ? "UK" : "US";
  // });

  const audioArr = data[0]?.phonetics || [];
  const result = audioArr.map((object) => {
    if (object.audio.includes("-ca")) return "CA";
    if (object.audio.includes("-uk")) return "UK";
    return "US"; // Якщо ні "CA", ні "UK", то "US"
  });

  const playAudio = () => {
    const audio = new Audio(audioSrc);

    console.log(result);
    audio.play();
  };

  return (
    <div className="word-desc__player">
      <h2>{country}</h2>
      <button onClick={playAudio}>
        <img src={playIcon} alt="button listen audio" />
      </button>
      <h3>{data[0]?.phonetics?.[link]?.text}</h3>
    </div>
  );
};

export default AudioPlayer;
