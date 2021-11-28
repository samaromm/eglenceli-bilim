import React from 'react'
import Typical from 'react-typical'
import Char from '../../../assets/img/char.gif'
import Rocket from '../../../assets/img/rocket.gif'
import './Space.css'

class Experiment extends React.Component {
  render () {
    return (
      <div className='planet-1 experiment animate__animated animate__bounceInRight'>
        <div className='color-overlay'></div>
        <img
          src={Char}
          alt='space-man'
          className='char animate__animated animate__zoomInUp'
        />
        <div class='talk-bubble tri-right round right-in animate__animated animate__bounce'>
          <div class='talktext'>
            <p>
              <Typical
                steps={['Watch the video', 1000, 'to help me out', 500]}
                loop={Infinity}
                wrapper='p'
              />
            </p>
          </div>
        </div>
        <iframe
          title="experiment"
          width='590'
          height='475'
          src='https://edpuzzle.com/embed/media/61a21e2922a84c4280b9c679'
          frameborder='0'
          allowfullscreen
        ></iframe>
        <div className='loading'>
          <Typical
            steps={['Loading', 1000, '...', 500]}
            loop={Infinity}
            wrapper='p'
          />
          <img src={Rocket} alt='loading' />
        </div>
      </div>
    )
  }
}
export default Experiment
