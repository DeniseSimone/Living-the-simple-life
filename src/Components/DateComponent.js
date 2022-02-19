import React from 'react'
import { FaCalendarAlt } from "react-icons/fa"; 


function DateComponent() {
    const d = new Date().toDateString();
     const dateStyle = {
        margin: '.5em 0',
        fontSize: '.875rem'
     }

    return(
        <>
            <p style={dateStyle}><FaCalendarAlt style={{color: '#1792d2'}}/> {d}</p>
        </>
    )
}

export default DateComponent