import Header from "../widgets/header/header";
import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
export default App;
