import React from 'react'
import './class.scss'
import img from '../../../public/classe1.png'
import img2 from '../../../public/class.jpg'

const Class = () => {
  return (
    <div id='classes' className='classes'>
     <div className="container">
        <div className="content">

            <div className="box-img box">
                <img src={img} alt="" />
            </div>

            <div className="text-box box">
            <h2>Our Classes</h2>

                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, deserunt officiis dolorem
                       blanditiis quisquam eum consectetur ipsam sed possimus rerum, vitae fuga. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Voluptatibus, deleniti.</p>

                      <div className="item-container">

                        <div className="item">
                        <div className="item-img">
                            <img src={img2} alt="" />

                            
                        </div>

                        <div className="item-text">
                        <h4>Streatching Traning</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Error, veniam!</p>
                                <a href="">Get Deails</a>
                        </div>

                        </div>

                        <div className="item">

                        

                        <div className="item-text">
                        <h4>Streatching Traning</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit. Error, veniam!</p>
                                <a href="">Get Deails</a>
                        </div>

                        <div className="item-img">
                            <img src={img2} alt="" />

                            
                        </div>

                        </div>


                        
                      </div>
            </div>



        </div>
     </div>
    </div>
  )
}

export default Class
