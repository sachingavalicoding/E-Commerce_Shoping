import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
const Footor = () => {
  return (
     <footer>
        <div className='container footer__container'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='footer'/>
                </Link>
                <p>
                    loren ois oal heay jali Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus?
                </p>
                <div className='footer__socials'>
                    <a href='https://linkedin.com/' target='_blank' rel='noreferrer nooperner'><FaLinkedin /> </a>
                    <a href='https://facebook.com/' target='_blank' rel='noreferrer nooperner'><FaFacebookF /> </a>
                    <a href='https://twitter.com/' target='_blank' rel='noreferrer nooperner'><AiOutlineTwitter />  </a>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer nooperner'><AiFillInstagram />  </a>
                </div>
            </article>
            <article>
                <h4>
                    Permalinks
                </h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>
                    Permalinks
                </h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>
                    Permalinks
                </h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small> 2023 Sachin Gavali Coding &copy; All Rights Reserved </small>
        </div>
     </footer>
  )
}

export default Footor
