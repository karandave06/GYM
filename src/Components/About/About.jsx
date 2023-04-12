import React from 'react'
import './about.scss'
import Card from './card'
import img from '../../../public/gym1.jpg'
import img2 from '../../../public/gym2.jpg'

const About = () => {
  return (
    <div id="about" className='about'>

    <div className="container ">
      <div className="content justify-center items-center flex flex-col md:flex-row">

        <Card img={img} title="Best Traning" />

        <Card img={img2}  title="Free Consulation"/>

        <Card img={img}  title="Build Perfect Body"/>
       
      </div>
    </div>


      
    </div>
  )
}

export default About
