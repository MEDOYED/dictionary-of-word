import nothingFound from "../../../assets/img/error-page/nothing-found.png";

import "./error-page.scss";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="error-page">
        <h1>Word not found!</h1>
        <img src={nothingFound} alt="" />
        <h2>(try another word)</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
