import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BootWinners from "./Components/BootWinners";
import PastRecipients from "./Components/PastRecipients";
import PlayerBios from "./Components/PlayerBios";
import History from "./Components/History";
import Rules from "./Components/Rules";
import HomeNavigation from "./Components/HomeNavigation";
import PredictionList from "./Components/predictions/predictionList";
import Edit from "./Components/predictions/edit";
import Create from "./Components/predictions/create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeNavigation />} />
        <Route path="/PlayerBios" element={<PlayerBios />} />
        <Route path="/FlagRecipients" element={<PastRecipients />} />
        <Route path="/BootRecipients" element={<BootWinners />} />
        <Route exact path="/InsightToNextYear" element={<PredictionList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/History" element={<History />} />
        <Route path="/Rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
