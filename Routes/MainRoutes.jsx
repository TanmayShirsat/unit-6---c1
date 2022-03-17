import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import App from "../App";
export const MainRoutes = () => {
  return (
      <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
};
