import React, { useState } from 'react'
import './Navbar.scss'
import {HiBars3BottomRight} from 'react-icons/hi2';
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [toggle,settoggle] = useState(false);
  return (
    <div className='navbar'>
   <nav className='px-10 py-3 flex justify-between items-center'>

    <div className="logo">
    <h1>
        <span id='logo-text'>Welness</span> Club

    </h1>
    </div>


    <div className="nav-menue">
        <ul className='nav-item hidden  md:flex gap-5'>
            <li>
                  <a href="#header">Home</a>
            </li>

            <li>
                  <a href="#about">About</a>
            </li>

            <li>
                  <a href="#services">Services</a>
            </li>

            <li>
                  <a href="#classes">Classes</a>
            </li>

            <li>
                  <a href="#shadule">Shedule</a>
            </li>


            <li>
                  <a href="#price">Price</a>
            </li>

            <li>
                  <a href="home">Home</a>
            </li>
        </ul>

        
    { 
        toggle ? (  <AiOutlineClose id='toggle' className=' text-white  fixed right-2 md:text-4xl top-5 text-2xl     md:hidden block  cursor-pointer' onClick={()=>settoggle(!toggle)}/> ) 

        : (<HiBars3BottomRight id='toggle' onClick={()=>settoggle(!toggle)} className=' md:hidden block text-2xl cursor-pointer fixed right-2 md:text-4xl top-5 text-white' />)
    }




    {/* Responsive design */}
    <ul id='resmenu' className={` bg-black text-white md:hidden fixed 
    right-0 top-0 flex gap-5 flex-col h-full w-[280px] justify-start items-start   ${toggle ? `right-0` : `right-[-100%]`}`}>
            <li>
                  <a  onClick={()=>settoggle(!toggle)} href="#header">Home</a>
            </li>

            <li>
                  <a  onClick={()=>settoggle(!toggle)}  href="#about">About</a>
            </li>

            <li>
                  <a  onClick={()=>settoggle(!toggle)} href="#services">Services</a>
            </li>

            <li>
                  <a  onClick={()=>settoggle(!toggle)} href="#classes">Classes</a>
            </li>

            <li>
                  <a  onClick={()=>settoggle(!toggle)} href="#shadule">Shedule</a>
            </li>


            <li>
                  <a  onClick={()=>settoggle(!toggle)} href="#price">Price</a>
            </li>

            <li>
                  <a  onClick={()=>settoggle(!toggle)} href="home">Home</a>
            </li>
        </ul>

      
       

        
    </div>



   </nav>
    </div>
  )
}

export default Navbar
