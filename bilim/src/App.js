import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/HomePage'
import Chapters from './containers/ChaptersMain'
import Forest from './containers/ForestChapter'
import MathGame from './containers/MathGamePage'
import Memorygame from "./containers/Mainpage";

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/forest' element={<Forest />} />
        <Route path='/math-game' element={<MathGame />} />
        <Route path='/Memorygame' element={<Memorygame />} />
      </Routes>
    </Router>
  )
}

export default App
