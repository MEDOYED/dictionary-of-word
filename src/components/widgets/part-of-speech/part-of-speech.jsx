import ImageAi from "../image-ai/image-ai";
import AudioPlayer from "../../ui/audio-player/audio-player";
import SynonymsList from "../synonims-list/synonyms-list";
import HeadingPartOfSpeech from "../heading-part-of-speech/heading-part-of-speech";

import "./part-of-speech.scss";

const PartOfSpeech = ({ data, word, elemOfArr }) => {
  return (
    <>
      <section className="part-of-speech__section">
        <HeadingPartOfSpeech data={data} elemOfArr={elemOfArr} />

        <div className="main-part">
          <ImageAi word={word} data={data} elemOfArr={elemOfArr} />

          <div className="wrapper">
            <div className="definition">
              {data[0]?.meanings[elemOfArr]?.definitions[0]?.definition}
            </div>
            {data[0]?.meanings[elemOfArr]?.definitions[0]?.example && (
              <div className="example">
                <h2>For example:</h2>
                <p>- {data[0]?.meanings[elemOfArr]?.definitions[0]?.example}</p>
              </div>
            )}
          </div>
        </div>

        <SynonymsList data={data} meaningsNum={elemOfArr} />

        <h2 className="more-examples">More defenition:</h2>
        <ul className="more-definitions">
          {data[0]?.meanings[elemOfArr]?.definitions.map(
            (elem, i) =>
              i < 4 && (
                <li key={i} className="word-desc__more-definitions-item">
                  - {elem.definition}
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
};

export default PartOfSpeech;
