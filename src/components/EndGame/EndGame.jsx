import React from 'react'
import './EndGame.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EndGame = () => {
  return (
    <div className="endGamePage">
      <h1 class="endGameText fire"><a href="/chapters"> Next Level </a></h1>
      <style type="text/css">
      {`
        .btn-flat {
          background-color: #6b202a;
          color: white;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 2rem;
        }
      `}
      </style>
      <Button href="/home" variant="flat" size="xxl">
          Return To Home Page
      </Button>
    </div>
  )
}
export default EndGame
