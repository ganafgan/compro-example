import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='service' onClick={toggle}>Service</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>SignUp</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
