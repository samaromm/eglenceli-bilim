import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/HomePage'
import Chapters from './containers/ChaptersMain'
import Space from './containers/SpaceChapter'
import Experiment from './containers/ExperimentPage'
import MathGame from './containers/MathGamePage'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/space' element={<Space />} />
        <Route path='/math-game' element={<MathGame />} />
        <Route path='/experiment' element={<Experiment />} />
      </Routes>
    </Router>
  )
}

export default App
