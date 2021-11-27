import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/HomePage'
import Chapters from './containers/ChaptersMain'
import Forest from './containers/ForestChapter'
import MathGame from './containers/MathGamePage'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/planet-1' element={<Forest />} />
        <Route path='/math-game' element={<MathGame />} />
      </Routes>
    </Router>
  )
}

export default App
