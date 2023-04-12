import React from 'react'
import './services.scss'
import Data from './Data'



const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="container">
        <div className="content">
            {/* ................text-box................ */}

            <div className="text box">
            <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem fuga quibusdam ducimus
                        consequatur perspiciatis quasi magnam ex! Illum minus quibusdam ad cum, eligendi ut doloribus
                        mollitia autem libero adipisci quas, a exercitationem.</p>
                    <a href="" className="btn services-btn">Start Now</a>
            </div>

{/* .........accordian-box.............. */}
            <div className="accordian box">
           <Data />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
