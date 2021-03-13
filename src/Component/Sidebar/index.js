import React,{useState} from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,
    SidebarLink,SideBtnWrap,SidebarRoute } from './SlidebarElements';


const Sidebar = ({isOpen , toggle})=> {
    
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
export default Sidebar;