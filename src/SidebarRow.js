import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarRow.css';

function SidebarRow({src,Icon,title}) {//need to use capital letter (Icon) to pass in component as props
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src}/>} 
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div> //very reuseable component
    )
}

export default SidebarRow
