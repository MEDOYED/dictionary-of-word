import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import App from "./components/app/App.jsx";
import WordDescPage from "./components/pages/word-desc-page/word-desc-page.jsx";
import HomePage from "./components/pages/home-page/home-page.jsx";

import "./main.css";

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="word/:word" element={<WordDescPage />} />
      </Route>
    </Routes>
  </Router>
);
