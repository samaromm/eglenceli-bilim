import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/HomePage'
import Chapters from './containers/ChaptersMain'
import Space from './containers/SpaceChapter'
import Experiment from './containers/ExperimentPage'
import MathGame from './containers/MathGamePage'
import EndGame from './containers/EndGamePage'
import Memorygame from "./containers/Mainpage";
import './App.css'
import "@material-tailwind/react/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'


const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/space' element={<Space />} />
        <Route path='/math-game' element={<MathGame />} />
        <Route path='/experiment' element={<Experiment />} />
        <Route path='/end-game' element={<EndGame />} />
      <Route path='/Memorygame' element={<Memorygame />} />
      </Routes>
    </Router>
  )
}

export default App
