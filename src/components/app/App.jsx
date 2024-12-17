import Header from "../widgets/header/header";
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
