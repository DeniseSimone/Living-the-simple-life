import React, {Component} from 'react'
import '../Styles/Header.css'

import Navbar from './Navbar'

class Header extends Component {
    render () {
        return (
            <header>
                <div className='container container-nav'>
                    <div className='title-subtitle'>
                        <h1 className='title'>Living the simple life</h1>
                        <p className='subtitle'>A blog exploring minimalism in life</p>
                    </div>
                    <Navbar />
                </div>
            </header>
        )
    }
}

export default Header