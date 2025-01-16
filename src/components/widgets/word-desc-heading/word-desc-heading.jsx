import wikiLogo from "../../../assets/img/word-desc/wikipedia-logo-icon.svg";

import "./word-desc-heading.scss";

const WordDescHeading = ({ data }) => {
  return (
    <>
      <h1 className="word-desc__heading">
        Meaning of <span className="word-desc__heading--bold">{data[0]?.word}</span> in English
      </h1>
      <ul className="word-desc__links">
        {data[0]?.sourceUrls[0] && (
          <li className="word-desc__link">
            <a href={data[0]?.sourceUrls[0]} target="_blank">
              <img src={wikiLogo} alt="link to Wikipedia" />
            </a>
          </li>
        )}
        {data[0]?.sourceUrls[1] && (
          <li className="word-desc__link">
            <a href={data[0]?.sourceUrls[1]} target="_blank">
              <img src={wikiLogo} alt="link to Wikipedia" />
            </a>
          </li>
        )}
      </ul>
    </>
  );
};

export default WordDescHeading;
