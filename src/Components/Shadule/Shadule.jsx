import React, { useEffect } from 'react'
import './shadule.scss';
import img from '../../../public/sheduleimg2.png'
import Table from './Table';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Shadule = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div id='shadule' className='shadule'>
      <div className="container">
        <div className="content">
            <div className="box text">

            <h2>Classes Shedule</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ducimus reiciendis soluta nam
                        placeat earum aliquid odio at, neque libero? Veniam accusamus quasi molestiae illum voluptates
                        ipsum ea tenetur.</p>
                    <img src={img}alt="" data-aos="fade-up"></img>

            </div>

            <div className="box timing">
<Table />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shadule
