import React from 'react'
import './Hero.css'
import Logo from '../../assets/img/Logo.png'
import DiscordIcon from '../../assets/img/discord.jpg'
import XIcon from '../../assets/img/X_logo.jpg'
import TheRiftersPurple from '../../assets/img/TheRiftersPurple.png'
import TheRiftersWhite from '../../assets/img/TheRiftersWhite.png'
import ComingSoon from '../../assets/img/Comingsoon.png'

const Hero = () =>{
  return (

    <div className='wrapper'>
      <div className='character'></div>
      <div className="main">
        <div className="header">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className='content'>
          <div className="centered-logo">
            <img src={TheRiftersPurple} alt="The Rifters" className="rifters-logo-purple" />
            <img src={TheRiftersWhite} alt="The Rifters" className="rifters-logo-white" />
            <img src={ComingSoon} alt="Coming Soon" className="coming-soon" />
          </div>

        </div>
        <div className="social-icons">
          <a href="https://x.com/RIFTStudioz">  <img src={XIcon} alt="X" className="x-icon" /></a>
          </div>
      </div>
    </div>

  )
}

export default Hero
