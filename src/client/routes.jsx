import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomeMenu from "./components/home";
import Register from "./components/register";
import NotFound from "./components/etc/notfound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomeMenu />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
