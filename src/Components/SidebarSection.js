import React from "react";
import '../Styles/SidebarSection.css'

import SidebarWidget from "./SidebarWidget";
import SidebarWidgetDB from "../DataBases/SidebarWidgetDataBase";

import '../Styles/SidebarSection.css'

const SidebarSection = (props) => {
    const SB = SidebarWidgetDB.map( item => <SidebarWidget widgetTitle={item.title} imgUrl={item.image} imgAlt={item.alt} widgetBody={item.body} /> )

    return(
        <aside className="sidebar">
            <h2 className="sidebar-Title">{props.sidebarTitle}</h2>
            {SB}
        </aside>
    )
}

export default SidebarSection