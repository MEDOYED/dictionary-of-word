import { Link } from "react-router";

import hithubIcon from "../../../assets/img/header/github-icon.svg";
import bookIcon from "../../../assets/img/header/book.png";
import unsplashIcon from "../../../assets/img/header/unsplash-api-icon.png";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__content   ">
          <div className="header__logo">
            <Link to={"/"}>Dictionary of the words</Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-links">
              <li className="header__nav-link">
                <a href="https://github.com/MEDOYED/dictionary-of-word" target="_blank">
                  <img src={hithubIcon} alt="link to github" />
                </a>
              </li>
              <li className="header__nav-link">
                <a href="https://dictionaryapi.dev/" target="_blank">
                  <img src={bookIcon} alt="link to github" />
                </a>
              </li>
              <li className="header__nav-link">
                <a href="https://unsplash.com/documentation" target="_blank">
                  <img src={unsplashIcon} alt="link to github" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
