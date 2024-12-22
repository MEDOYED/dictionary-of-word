import { useRef } from "react";

import "./synonyms-list.css";

const SynonymsList = ({ data, meaningsNum }) => {
  const titleRef = useRef(null);
  const listRef = useRef(null);

  const handleClick = () => {
    const isActive = listRef.current.classList.contains("active");

    if (isActive) {
      listRef.current.style.maxHeight = 0;
      titleRef.current.classList.remove("active");
      setTimeout(() => {
        listRef.current.classList.remove("active");
      }, 300);
    } else {
      titleRef.current.classList.add("active");
      listRef.current.classList.add("active");
      listRef.current.style.maxHeight = `${listRef.current.scrollHeight}px`;
    }
  };

  return (
    <>
      {data[0]?.meanings[meaningsNum]?.synonyms[0] && (
        <div
          className="word-desc__synonyms-title"
          data-tab="tab-1"
          onClick={handleClick}
          ref={titleRef}>
          <h3>Synonyms:</h3>
          <span></span>
        </div>
      )}
      <ul className="word-desc__synonyms-list" ref={listRef} id="tab-1">
        {data[0]?.meanings[meaningsNum]?.synonyms[0] && (
          <li className="word-desc__synonyms-item">
            - {data[0]?.meanings[meaningsNum]?.synonyms[0]}
          </li>
        )}
        {data[0]?.meanings[meaningsNum]?.synonyms[1] && (
          <li className="word-desc__synonyms-item">
            - {data[0]?.meanings[meaningsNum]?.synonyms[1]}
          </li>
        )}
        {data[0]?.meanings[meaningsNum]?.synonyms[2] && (
          <li className="word-desc__synonyms-item">
            - {data[0]?.meanings[meaningsNum]?.synonyms[2]}
          </li>
        )}
        {data[0]?.meanings[meaningsNum]?.synonyms[3] && (
          <li className="word-desc__synonyms-item">
            - {data[0]?.meanings[meaningsNum]?.synonyms[3]}
          </li>
        )}
        {data[0]?.meanings[meaningsNum]?.synonyms[4] && (
          <li className="word-desc__synonyms-item">
            - {data[0]?.meanings[meaningsNum]?.synonyms[4]}
          </li>
        )}
      </ul>
    </>
  );
};

export default SynonymsList;
