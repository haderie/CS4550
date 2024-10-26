import React from "react";
import { Navigate, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Kanbas from "./Kanbas";
import Labs from "./Labs";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
