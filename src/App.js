import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import WritePage from "./pages/Write";
import ApplyPage from "./pages/Apply";



function App() {
  return (
    <Router>
      <main>
        <div className="App">
          <Routes>
            <Route path="/details/:detailId" element={<DetailPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/apply/:id" element={<ApplyPage />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
