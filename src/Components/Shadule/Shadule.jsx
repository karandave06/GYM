import React from 'react'
import './shadule.scss';
import img from '../../../public/sheduleimg2.png'
import Table from './Table';

const Shadule = () => {
  return (
    <div id='shadule' className='shadule'>
      <div className="container">
        <div className="content">
            <div className="box text">

            <h2>Classes Shedule</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ducimus reiciendis soluta nam
                        placeat earum aliquid odio at, neque libero? Veniam accusamus quasi molestiae illum voluptates
                        ipsum ea tenetur.</p>
                    <img src={img}alt=""></img>

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
