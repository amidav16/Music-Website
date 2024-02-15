import React from "react";
import "./App.css";

import { ToastContainer } from "react-toastify";
import Routes from "./client/routes";

const App = () => {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
};

export default App;
