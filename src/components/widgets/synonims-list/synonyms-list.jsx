import { useRef } from "react";

import "./synonyms-list.css";

const SynonymsList = ({ data }) => {
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
      <div
        className="word-desc__synonyms-title"
        data-tab="tab-1"
        onClick={handleClick}
        ref={titleRef}>
        <h3>Synonyms:</h3>
        <span></span>
      </div>
      <ul className="word-desc__synonyms-list" ref={listRef} id="tab-1">
        <li className="word-desc__synonyms-item">- {data[0]?.meanings[0]?.synonyms[0]}</li>
        <li className="word-desc__synonyms-item">- {data[0]?.meanings[0]?.synonyms[1]}</li>
        <li className="word-desc__synonyms-item">- {data[0]?.meanings[0]?.synonyms[2]}</li>
        <li className="word-desc__synonyms-item">- {data[0]?.meanings[0]?.synonyms[3]}</li>
        <li className="word-desc__synonyms-item">- {data[0]?.meanings[0]?.synonyms[4]}</li>
      </ul>
    </>
  );
};

export default SynonymsList;
