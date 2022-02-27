import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BootWinners from './Components/BootWinners';
import Navigation from './Components/HomeNavigation';
import NextYearInsight from './Components/NextYearInsight';
import PastRecipients from './Components/PastRecipients';
import PlayerBios from './Components/PlayerBios';
import History from './Components/History';
import Rules from './Components/Rules';
import SiteNavBar from './Components/SiteNavBar';
import HomeNavigation from './Components/HomeNavigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomeNavigation /> } />
        <Route path='/PlayerBios' element={ <PlayerBios /> } />
        <Route path='/FlagRecipients' element={ <PastRecipients /> } />
        <Route path='/BootRecipients' element={ <BootWinners /> }/>
        <Route path='InsightToNextYear' element={ <NextYearInsight /> } />
        <Route path='History' element={ <History /> } />
        <Route path='Rules' element={ <Rules /> } />
      </Routes>
    </div>
  );
}

export default App;
