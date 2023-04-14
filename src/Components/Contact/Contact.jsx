import React from 'react'
import './contact.scss'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <div id='contact' className='contact'>

    <div className="container">


        <div className="left box">
            <form action="" className="form">
                <input type="text" placeholder='Enter Your Name' />
                <input type="text" placeholder='Enter Your Email' autoCapitalize='off'/>
                <input type="text" placeholder='Enter Your Number' />

                <textarea placeholder='Enter Massage'></textarea>
                <button type='submit'>Send Massage</button>
            </form>
        </div>


        <div className="right box">
        <h2>Get Connected With Gym</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iusto repellat magnam nemo?</p>

        <div className="info">
            <ul>
                <li>
                    <span><HiLocationMarker /> </span>Shiv Shakti Society Tharad,BK
                </li>

                <li>
                    <span><BsFillTelephoneFill/></span>  +91 9429584270
                </li>

                <li><span><MdEmail /></span>karandave503@gmail.com </li>
            </ul>
        </div>

        <div className="social">
            <a href=""><span><GrFacebookOption /></span></a>
            <a href=""><span><AiFillInstagram /></span></a>
        </div>


        <div className="copy">
            Created BY &copy; Daveloper Dave
        </div>

        </div>
    </div>
      
    </div>
  )
}

export default Contact
