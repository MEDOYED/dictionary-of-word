import AudioPlayer from "../../ui/audio-player/audio-player";

import "./heading-part-of-speech";

const HeadingPartOfSpeech = ({ data, elemOfArr }) => {
  return (
    <>
      <h2 className="title">{data[0]?.word}</h2>
      <h2 className="part-of-spech">{data[0]?.meanings[elemOfArr]?.partOfSpeech}</h2>
      <ul className="audio-players">
        <AudioPlayer data={data} />
      </ul>
    </>
  );
};

export default HeadingPartOfSpeech;
