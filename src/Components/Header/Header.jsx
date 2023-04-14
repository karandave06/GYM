import React, { useEffect } from 'react'
import './Header.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  return (
    <div className='header' id='header'>
     <div className="content">
      <p data-aos="zoom-in" className='text-white text-[1.2rem] xs:text-[1.5rem] md:text-[3rem] md:pl-16 font-bold'>
      IT'S <span id='red' >HEALTH</span> TIME. LET'S GO <br />
WE ARE READY TO <span id='red'> FIT YOU </span> 
      </p>
     </div>
    </div>
  )
}

export default Header
