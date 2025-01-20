import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AudioPlayer from "../../ui/audio-player/audio-player";
import Line1px from "../../ui/line-1px/line-1px";
import SynonymsList from "../../widgets/synonims-list/synonyms-list";
import BoldLine from "../../ui/bold-line/bold-line";
import ErrorPage from "../error-page/error-page";
import ImageAi from "../../widgets/image-ai/image-ai";
import WordDescHeading from "../../widgets/word-desc-heading/word-desc-heading";

import "./word-desc-page.scss";

const WordDescPage = () => {
  const { word } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error("error");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorPage />;
  if (!data) return <p>No data available</p>;

  return (
    <>
      <section className="word-desc">
        <WordDescHeading data={data} />

        <Line1px />

        <section>
          <h2 className="title">{data[0]?.word}</h2>
          <h2 className="part-of-spech">{data[0]?.meanings[0]?.partOfSpeech}</h2>
          <ul className="audio-players">
            <AudioPlayer data={data} />
          </ul>

          <div className="main-part">
            <ImageAi word={word} data={data} elemOfArr={0} />

            <div className="wrapper">
              <div className="definition">{data[0]?.meanings[0]?.definitions[0]?.definition}</div>
              {data[0]?.meanings[0]?.definitions[0]?.example && (
                <div className="example">
                  <h2>For example:</h2>
                  <p>- {data[0]?.meanings[0]?.definitions[0]?.example}</p>
                </div>
              )}
            </div>
          </div>

          <SynonymsList data={data} meaningsNum={0} />

          <h2 className="more-examples">More defenition:</h2>
          <ul className="more-definitions">
            {data[0]?.meanings[0]?.definitions.map(
              (elem, i) =>
                i < 4 && (
                  <li key={i} className="word-desc__more-definitions-item">
                    - {elem.definition}
                  </li>
                )
            )}
          </ul>
        </section>

        {data[0]?.meanings[1]?.definitions && (
          <>
            {" "}
            <BoldLine />
            <section>
              <h2 className="title">{data[0]?.word}</h2>
              <h2 className="part-of-spech">{data[0]?.meanings[1]?.partOfSpeech}</h2>
              <ul className="audio-players">
                <AudioPlayer data={data} />
              </ul>

              <div className="main-part">
                <ImageAi word={word} data={data} elemOfArr={1} />

                <div className="wrapper">
                  <div className="definition">
                    {data[0]?.meanings[1]?.definitions[0]?.definition}
                  </div>
                  {data[0]?.meanings[1]?.definitions[0]?.example && (
                    <div className="example">
                      <h2>For example:</h2>
                      <p>- {data[0]?.meanings[1]?.definitions[0]?.example}</p>
                    </div>
                  )}
                </div>
              </div>

              <SynonymsList data={data} meaningsNum={1} />

              <h2 className="more-examples">More defenition:</h2>
              <ul className="more-definitions">
                {data[0]?.meanings[1]?.definitions.map(
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
        )}
      </section>
    </>
  );
};

export default WordDescPage;
