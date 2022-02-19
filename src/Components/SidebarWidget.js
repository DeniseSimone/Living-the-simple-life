import React from 'react'
import '../Styles/SidebarWidget.css'

const SidebarWidget = (props) => {
    return(
        <div className='widget-recent-post'>
            <h3 className='widget-recent-post-title'>{props.widgetTitle}</h3>
            <img src={props.imgUrl} alt={props.imgAlt} className='widget-image' />
            <p className='widget-body'>{props.widgetBody}</p>
        </div>
    )
}

export default SidebarWidget