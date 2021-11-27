import React from 'react'
import Char from '../../../assets/img/char.gif'
import './Space.css'


class Experiment extends React.Component {
  render () {
    return (
      <div className='planet-1 experiment animate__animated animate__bounceInDown'>
        <div className='color-overlay'></div>
        <div className='color-overlay char-overlay'></div>
        <img
          src={Char}
          alt='space-man'
          className='char animate__animated animate__zoomInUp'
        />
        
      </div>
    )
  }
}
export default Experiment
