import Header from "../widgets/header/header";
import SearchPanel from "../widgets/search-panel/search-panel";
// import { Outlet } from "react-router";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
export default App;
