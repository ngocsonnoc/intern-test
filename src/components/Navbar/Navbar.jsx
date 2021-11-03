import React, { useEffect, useState } from 'react'
import { NavbarWrapper } from './nb.elm'
import logo from '../../assets/images/logo.png'
const Navbar = () => {
    const [active, setActive] = useState(false)
    const handleActiveNavbar =()=>{
        setActive(!active)
        console.log(active)
    }
    useEffect(() => {
        const resetNavbar =()=>{
            if(window.innerWidth>975){
                setActive(false)
            }
        }
        window.addEventListener('resize',resetNavbar)
        return () => {
            window.removeEventListener('resize', resetNavbar)
        }
    }, [active])
    return (
        <NavbarWrapper active={active}>
            <div className='navbar__logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='menu-icon' onClick={handleActiveNavbar}><i className="fas fa-bars"></i></div>
            <div className='navbar__center'>
                <div className='navbar__center-item active'>
                    Introduction
                </div>
                <div className='navbar__center-item'>
                    Solution
                </div>
                <div className='navbar__center-item'>
                    Rate Plant
                </div>
            </div>
            <div className='navbar__right'>
                <div className='navbar__right-item'>
                    Login
                </div>
                <div className='navbar__right-item'>
                    Apply for free user
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar
