import React from 'react'
import './price.scss'
import Card from './Card/Card'



const Price = () => {
  return (
    <div className='price' id='price'>
     <div className="price-text">
        <h1>Choose Your Packege</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima dicta doloremque nam ipsa dolorum molestias dolorem odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis! </p>
     </div>

     <div className="item-container">
<Card />
<Card />
<Card />
     </div>

    </div>
  )
}

export default Price
