import React from 'react'
//import ReactAudioPlayer from 'react-audio-player'
import Char from '../../../assets/img/char.gif'
import './Forest.css'

const Forest = () => {
  return (
    <div className='planet-1'>
      <div className="color-overlay"></div>
      <img src={Char} alt='space-man' className='char' />
      <div className="color-overlay char-overlay"></div>
      {/*<ReactAudioPlayer src='my_audio_file.ogg' autoPlay controls />*/}
    </div>
  )
}
export default Forest
