import React from 'react'
import '../Styles/Footer.css'

// import icons from React Icons - be aware that is necessary to run some command on the terminal 
import { FaFacebookSquare } from "react-icons/fa";   
import { FaTwitterSquare } from "react-icons/fa";   
import { FaInstagramSquare } from "react-icons/fa";   

const Footer = () => {
    return (
        <footer>
            <div className='footer-social-icons'>
                <a href="#" target="" rel="noopener noreferrer meaning"><FaFacebookSquare className='social-icon'/></a>
                <a href="#" target="" rel="noopener noreferrer meaning"><FaInstagramSquare className='social-icon'/></a>
                <a href="#" target="" rel="noopener noreferrer meaning"><FaTwitterSquare className='social-icon'/></a>
            </div>
            <div className='footer-links'>
                <a href="#" target="" rel="noopener noreferrer meaning">Home</a>
                <a href="#" target="" rel="noopener noreferrer meaning">About</a>
                <a href="#" target="" rel="noopener noreferrer meaning">Articles</a>
                <a href="#" target="" rel="noopener noreferrer meaning">Terms</a>
                <a href="#" target="" rel="noopener noreferrer meaning">Privacy Policy</a>
            </div>
            <p className='footer-website-rights'>Living the simple life © 2022</p>
        </footer>
    )
}

export default Footer