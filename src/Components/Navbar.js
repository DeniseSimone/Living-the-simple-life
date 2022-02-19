import React, {Component} from 'react'
import '../Styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'><a href='#' className='nav-link current-page' target="" rel="noopener noreferrer meaning">HOME</a></li>
                    <li className='nav-list-item'><a href='#' className='nav-link' target="" rel="noopener noreferrer meaning">ABOUT</a></li>
                    <li className='nav-list-item'><a href='#' className='nav-link' target="" rel="noopener noreferrer meaning">ARTICLES</a></li>
                    <li className='nav-list-item'><a href='#' className='nav-link' target="" rel="noopener noreferrer meaning">SUBSCRIBE</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar