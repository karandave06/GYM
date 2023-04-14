import React from 'react'
import './card.scss'
import img from '../../../../public/price1.jpeg'

const Card = () => {
  return (
    <div className='card'>
    

  
   <div className="title">
    <h1>
    &#8377;2000/Month
    </h1>

   </div>

   <div className="img">
    <img src={img} alt="" />
   </div>

   <div className="content">
    <h3>Body Building Training</h3>
    <h1>Body Building Training</h1>
    <h1>Body Building Training</h1>
    <h1>Body Building Training</h1>
    <h1>Body Building Training</h1>
    <h1>Body Building Training</h1>



    <a href="" className='btn-text'>Join Now</a>
   </div>




    </div>
 

  )
}

export default Card
