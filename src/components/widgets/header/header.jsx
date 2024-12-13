import hithubIcon from "../../../assets/img/header/github-icon.svg";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__content   ">
          <div className="header__logo">Dictionary of the words</div>
          <nav className="header__nav">
            <ul className="header__nav-links">
              <li className="header__nav-link">
                <a href="https://github.com/MEDOYED/dictionary-of-word">
                  <img src={hithubIcon} alt="link to github" />
                </a>
              </li>
              <li className="header__nav-link">
                <a href="https://github.com/MEDOYED/dictionary-of-word">
                  <img src={hithubIcon} alt="link to github" />
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
