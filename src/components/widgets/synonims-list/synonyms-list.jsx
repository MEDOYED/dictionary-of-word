import { useRef } from "react";

import "./synonyms-list.css";

const SynonymsList = ({ data }) => {
  const titleRef = useRef(null);
  const listRef = useRef(null);

  const handleClick = () => {
    if (titleRef.current.classList.contains("active")) {
      titleRef.current.classList.remove("active");
      listRef.current.classList.remove("active");
    } else {
      titleRef.current.classList.add("active");
      listRef.current.classList.add("active");
    }
  };

  return (
    <>
      <div
        className="word-desc__synonyms-title"
        data-tab="tab-1"
        onClick={handleClick}
        ref={titleRef}>
        <h3>Synonyms:</h3>
        <span></span>
      </div>
      <ul className="word-desc__synonyms-list" ref={listRef} id="tab-1">
        <li className="word-desc__synonyms-item">{data[0]?.meanings[0]?.synonyms[0]}</li>
        <li className="word-desc__synonyms-item">{data[0]?.meanings[0]?.synonyms[1]}</li>
        <li className="word-desc__synonyms-item">{data[0]?.meanings[0]?.synonyms[2]}</li>
        <li className="word-desc__synonyms-item">{data[0]?.meanings[0]?.synonyms[3]}</li>
        <li className="word-desc__synonyms-item">{data[0]?.meanings[0]?.synonyms[4]}</li>
      </ul>
    </>
  );
};

export default SynonymsList;
