import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BootWinners from "./Components/BootWinners";
import Navigation from "./Components/HomeNavigation";
import NextYearInsight from "./Components/NextYearInsight";
import PastRecipients from "./Components/PastRecipients";
import PlayerBios from "./Components/PlayerBios";
import History from "./Components/History";
import Rules from "./Components/Rules";
import SiteNavBar from "./Components/SiteNavBar";
import HomeNavigation from "./Components/HomeNavigation";


// import CreatePrediction from "./CreatePrediction";
// import ShowPredictions from "./Components/predictions/ShowPredictions";
// import PredictionCard from "./Components/predictions/PredictionCard";
// import ShowPredictionDetails from "./Components/predictions/ShowPredictionDetails";
// import UpdatePrediction from "./Components/predictions/UpdatePrediction";

import Navbar from "./Components/predictions/navbar";
import PredictionList from "./Components/predictions/predictionList";
import Edit from "./Components/predictions/edit";
import Create from "./Components/predictions/create";
import {useState} from 'react'
import { useNavigate } from "react-router";


function App() {
  const [form, setForm] = useState({
    boot: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    flag: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPrediction = { ...form };

    await fetch("http://localhost:5000/InsightToNextYear/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrediction),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      boot: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      flag: "",
    });
    //    setForm({ boot: e.target.value, second: e.target.value, third: e.target.value, fourth: e.target.value, fifth: e.target.value, flag: e.target.value });
    navigate("/InsightToNextYear");
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeNavigation />} />
        <Route path="/PlayerBios" element={<PlayerBios />} />
        <Route path="/FlagRecipients" element={<PastRecipients />} />
        <Route path="/BootRecipients" element={<BootWinners />} />
        {/* <Route path="/InsightToNextYear" element={<NextYearInsight />} /> */}
        <Route exact path="/InsightToNextYear" element={<PredictionList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create  form={form}/>} />
        <Route path="/History" element={<History />} />
        <Route path="/Rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
