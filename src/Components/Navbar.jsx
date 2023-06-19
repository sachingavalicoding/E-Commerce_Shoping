import {useState} from 'react'
import React from 'react';
import Logo from '../images/logo.png'
import { Link, NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import './navbar.css'
function Navbar() {
    const [isNavShow , setIsNavShow] = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Nav Logo " />
                    </Link>
                    <ul className={ `nav__links ${isNavShow ? 'show__nav' : 'hide__nav' }`}>
                        <li>
                            <NavLink to='/' onClick={()=> setIsNavShow(prev => !prev)} > Home </NavLink>
                        </li>
                        <li>
                        

                            <NavLink to='/about'onClick={()=> setIsNavShow(prev => !prev)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery'onClick={()=> setIsNavShow(prev => !prev)}>Gallery</NavLink>

                        </li>
                        <li>
                            <NavLink to='/plans'onClick={()=> setIsNavShow(prev => !prev)}>Plans</NavLink>

                        </li>
                        <li>
                            <NavLink to='/trainers'onClick={()=> setIsNavShow(prev => !prev)}>Trainers</NavLink>

                        </li>
                        <li>
                            <NavLink to='/contact'onClick={()=> setIsNavShow(prev => !prev)}>Contact</NavLink>

                        </li>

                    </ul>
                    <button className="nav__toggle-btn" onClick={()=> setIsNavShow(prev => !prev)}>
                      {
                        isNavShow ? <AiOutlineClose /> : <FaBars /> 
                      }
                    </button>
               
            </div>
        </nav>
    )
}

export default Navbar
