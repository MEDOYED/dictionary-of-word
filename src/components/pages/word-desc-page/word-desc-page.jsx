import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Line1px from "../../ui/line-1px/line-1px";
import ErrorPage from "../error-page/error-page";
import WordDescHeading from "../../widgets/word-desc-heading/word-desc-heading";
import PartOfSpeech from "../../widgets/part-of-speech/part-of-speech";

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

        <PartOfSpeech data={data} word={word} elemOfArr={0} />
        <PartOfSpeech data={data} word={word} elemOfArr={1} />
        <PartOfSpeech data={data} word={word} elemOfArr={2} />
        <PartOfSpeech data={data} word={word} elemOfArr={3} />
      </section>
    </>
  );
};

export default WordDescPage;
