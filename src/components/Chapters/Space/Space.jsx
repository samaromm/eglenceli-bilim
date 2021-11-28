import React from 'react'
import { useNavigate } from 'react-router';
import Sound from 'react-sound'
import { Btns } from '../../../assets/data/SpaceBtns'
import { Audios } from '../../../assets/data/SpaceAudios'
import Char from '../../../assets/img/char.gif'
import './Space.css'


export default function RootFunction () {
  let navigate = useNavigate();// extract navigation prop here
  return <Space navigate={navigate} /> //pass to your component.
}

class Space extends React.Component {
  constructor () {
    super()
    this.state = { audio1: 'STOPPED', audio2: 'STOPPED', audio3: 'STOPPED', audio4: 'STOPPED' }
  }

  handleShowBtn = id => {
    let btn = document.getElementById(id)
    if (btn) btn.style.display = 'block'
  }

  handlePlayAudio = id => {
    let btns = document.querySelectorAll('.planet-1 .btn')
    for (let btn of btns) {
      btn.style.display = 'none'
    }
    let stateCopy = Object.assign({}, this.state)
    for (let i in stateCopy) {
      if (i === id) this.setState({ [i]: 'PLAYING' })
      else this.setState({ [i]: 'STOPPED' })
    }

    if (id === 'audio4') {
      let main = document.querySelector('.planet-1')
      main.classList.add('animate__bounceOutLeft')
      this.props.navigate('/experiment')
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
        {Btns.map(btn => {
          return (
            <button
              key={btn.id}
              id={btn.id}
              className='btn animate__animated fire'
              onClick={() => this.handlePlayAudio(btn.open)}
            >
              {btn.text}
            </button>
          )
        })}
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
      </div>
    )
  }
}

