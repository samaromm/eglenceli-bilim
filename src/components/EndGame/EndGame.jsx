import React from 'react'
import './EndGame.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EndGame = () => {
  return (
    <div className="endGamePage">
      <h1 class="endGameText fire"> Next Level </h1>
      <Button href="/home"  variant="danger" size="lg">
          Return To Home Page
      </Button>
    </div>
  )
}
export default EndGame
