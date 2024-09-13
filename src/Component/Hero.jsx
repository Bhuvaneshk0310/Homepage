import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/hero_icon.png'
const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-left'>
            <h2>NEW SWEETS ONLY</h2>
        <div>
        <div className='hand-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>sweet</p>
        <p>product</p>
        </div>
<div className="hero-latest-btn">
    <div>Latest collect</div>
    <img src={hero_image} alt=''/>

</div>
        </div>

        <div className='hero-right'>

        </div>
        
      </div>
    </div>
    
  )
}

export default Hero
