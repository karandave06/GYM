import React from 'react'
import './contact.scss'

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
                    <span>l</span>Shiv Shakti Society Tharad,BK
                </li>

                <li>
                    <span>p</span>  +91 9429584270
                </li>

                <li><span>e</span>karandave503@gmail.com </li>
            </ul>
        </div>

        <div className="social">
            <a href=""><span>f</span></a>
            <a href=""><span>i</span></a>
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
