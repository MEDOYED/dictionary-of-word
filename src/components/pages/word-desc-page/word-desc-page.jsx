import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AudioPlayer from "../../ui/audio-player/audio-player";

import wikiLogo from "../../../assets/img/word-desc/wikipedia-logo-icon.svg";

import "./word-desc-page.css";

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
        if (!response.ok) throw new Error("Word not found");
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
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <>
      <section className="word-desc">
        <div className="word-desc__wrapper">
          <div className="word-desc__content">
            <h2 className="word-desc__heading">Meaning of {data[0].word} in English</h2>
            <ul className="word-desc__links">
              <li className="word-desc__link">
                <a href={data[0].sourceUrls[0]} target="__blank">
                  <img src={wikiLogo} alt="link to Wikipedia" />
                </a>
              </li>
              <li className="word-desc__link">
                <a href={data[0].sourceUrls[1]} target="__blank">
                  <img src={wikiLogo} alt="link to Wikipedia" />
                </a>
              </li>
            </ul>
            <hr className="word-desc__line" />
            <h2 className="word-desc__title">{data[1]?.word}</h2>
            <div>{data[0]?.phonetics[1]?.text}</div>

            <AudioPlayer country={"CA"} link={0} data={data} />
            <AudioPlayer country={"UK"} link={1} data={data} />
            <AudioPlayer country={"US"} link={2} data={data} />

            <hr className="word-desc__bold-line" />

            <section className="word-desc__dog-noun">
              <h2 className="word-desc__title">{data[0].word}</h2>
              <h2 className="word-desc__part-of-spech">{data[0].meanings[0].partOfSpeech}</h2>
              <div className="word-desc__definition">
                {data[0].meanings[0].definitions[0].definition}
              </div>
              <div className="word-desc__example">{data[0].meanings[0].definitions[0].example}</div>

              <ul className="word-desc__synonyms-list">
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[0]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[1]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[2]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[3]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[4]}</li>
              </ul>

              <ul className="word-desc__more-definitions-list">
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[0].definitions[1].definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[0].definitions[2].definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[0].definitions[3].definition}
                </li>
              </ul>
            </section>

            <hr className="word-desc__bold-line" />
            <div>=========================================================</div>

            <section className="word-desc__dog-verb">
              <h2 className="word-desc__title">{data[0].word}</h2>
              <h2 className="word-desc__part-of-spech">{data[0].meanings[1].partOfSpeech}</h2>
              <div className="word-desc__definition">
                {data[0].meanings[1].definitions[0].definition}
              </div>
              <div className="word-desc__example">{data[0].meanings[1].definitions[0].example}</div>

              <ul className="word-desc__synonyms-list">
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[0]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[1]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[2]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[3]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[4]}</li>
              </ul>

              <ul className="word-desc__more-definitions-list">
                <li className="word-desc__more-definitions-item">
                  {data[0]?.meanings[1]?.definitions[1]?.definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0]?.meanings[1]?.definitions[2]?.definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0]?.meanings[1]?.definitions[3]?.definition}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordDescPage;
