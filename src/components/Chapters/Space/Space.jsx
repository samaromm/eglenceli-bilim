import React from 'react'
import { useHistory } from "react-router-dom";
import Sound from 'react-sound'
import { Btns } from '../../../assets/data/SpaceBtns'
import { Audios } from '../../../assets/data/SpaceAudios'
import Char from '../../../assets/img/char.gif'
import './Space.css'
import 'animate.css'


class Forest extends React.Component {
  constructor () {
    super()
    this.state = { audio1: 'STOPPED', audio2: 'STOPPED', audio3: 'STOPPED' }
  }
  history = useHistory();

  handleShowBtn = id => {
    let btn = document.getElementById(id)
    if(btn) btn.style.display = 'block'
  }

  handlePlayAudio = id => {
    let btns = document.querySelectorAll('.planet-1 .btn')
    for (let btn of btns) {
      btn.style.display = 'none'
    }
    let stateCopy = Object.assign({},this.state)
    for(let i in stateCopy){
      if(i===id) this.setState({ [i]: 'PLAYING' })
      else this.setState({ [i]: 'STOPPED' })
    }

    if(id==="audio4"){
      let main = document.querySelector(".planet-1")
      main.classList.add("animate__bounceOutLeft")
      history.push("/experiment")
    }
  }

  render () {
    return (
      <div className='planet-1 animate__animated'>
        <div className='color-overlay'></div>
        <div className='color-overlay char-overlay'></div>
        <img
          src={Char}
          alt='space-man'
          className='char animate__animated animate__zoomInUp'
        />
        {Audios.map(audio => {
          return (
            <Sound
              key={audio.id}
              url={audio.url}
              playStatus={this.state[audio.id]}
              onFinishedPlaying={() => this.handleShowBtn(audio.btn)}
            />
          )
        })}

        {Btns.map(btn => {
          return (
            <button
              key={btn.id}
              id={btn.id}
              className='btn btn-primary animate__animated animate__lightSpeedInLeft'
              onClick={() => this.handlePlayAudio(btn.open)}
            >
              {btn.text}
            </button>
          )
        })}
      </div>
    )
  }
}
export default Forest
