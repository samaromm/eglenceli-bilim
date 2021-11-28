import React, { useState } from 'react'
import Sound from 'react-sound'
import { Button } from 'react-bootstrap'
import Cheers from '../../assets/audio/cheers.mp3'
import './EndGame.css'

const EndGame = () => {
  const [play, setPlay] = useState('STOPPED')
  const onBtnClick = () => {
    setPlay('PLAYING')
    let msgBtn = document.getElementById('msgBtn')
    let returnBtn = document.getElementById('returnBtn')
    if (msgBtn) msgBtn.style.display = 'none'
    if (returnBtn) returnBtn.style.display = 'block'
  }

  return (
    <div className='endGamePage'>
      <h1 class='endGameText fire'>
        <a className="aFire" href='/memorygame'> YOUR GIFT </a>
      </h1>
      <Sound url={Cheers} playStatus={play} />
      <Button
        onClick={() => {
          onBtnClick()
        }}
        variant='flat'
        size='lg'
        id='msgBtn'
      >
        You got a message from Venus!
      </Button>
      <Button
        href='/chapters'
        variant='flat'
        size='lg'
        id='returnBtn'
        className='animate__animated animate__fadeIn'
      >
        Return to your planets
      </Button>
    </div>
  )
}
export default EndGame
