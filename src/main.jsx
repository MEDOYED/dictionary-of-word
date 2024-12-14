import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./components/app/App.jsx";
import WordDescPage from "./components/pages/word-desc-page/word-desc-page.jsx";
import HomePage from "./components/pages/homePage/home-page.jsx";

import "./main.css";

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dog" element={<WordDescPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
