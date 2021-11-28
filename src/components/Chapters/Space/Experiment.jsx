import React from 'react'
import Typical from 'react-typical'
import Char from '../../../assets/img/char.gif'
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
          width='628'
          height='353'
          src='https://edpuzzle.com/embed/assignments/61a2297799f67042c9330aeb/watch'
          frameborder='0'
          allowfullscreen
          className="purpleScroll"
        ></iframe>
      </div>
    )
  }
}
export default Experiment
