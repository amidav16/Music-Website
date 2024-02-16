import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Routes from "./client/routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes />
      <ToastContainer toastStyle={{ backgroundColor: "var(--lk-yellow)" }} />
    </div>
  );
};

export default App;
