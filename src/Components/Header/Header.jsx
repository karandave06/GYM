import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='header' id='header'>
     <div className="content">
      <p className='text-white text-[1.2rem] xs:text-[1.5rem] md:text-[3rem] md:pl-16 font-bold'>
      IT'S <span id='red' >HEALTH</span> TIME. LET'S GO <br />
WE ARE READY TO <span id='red'> FIT YOU </span> 
      </p>
     </div>
    </div>
  )
}

export default Header
