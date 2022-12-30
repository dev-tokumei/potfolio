import React, {useState} from 'react'
import './Navbar.css'
import imgNavbarLogo from './img/photo_2021-04-30_16-36-01.jpg'
import { GoThreeBars } from 'react-icons/go'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'

function Navbar() {
    const [navBar, setNavBar] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const showMenuF = () => {
        setShowMenu(!showMenu)
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 150) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    })

    return (
        <nav className={`${navBar && "nav-scroll"} nav`} >
            <div className='conteiner-linear' >
                <div className='flex-nav'>
                    <a href='#' className='imgNavbar'><img src={imgNavbarLogo} alt='Logo' /></a>
                    <div className='link-nav'>
                        <a href='#ABOUTME'>ОБО МНЕ</a>
                        {/* <a href='#PORTFOLIO'>ПОРТФОЛИО</a> */}
                        <a href='#УСЛУГИ'>УСЛУГИ</a>
                        <a href='#CONTACTS'>КОНТАКТЫ</a>
                    </div>
                    <div className='flex-icon'>
                    <div className='theme'>
                        <i><BsFillMoonFill /></i>
                        <i><BsSunFill /></i>
                    </div>
                    <i onClick={showMenuF} className='icon-mobile' ><GoThreeBars /></i>
                    </div>
                </div>
            </div>
            <div className={`${showMenu && 'show-menu-mobile'} mobile-menu`}>
                <div className='conteiner-linear'>
                    <i onClick={showMenuF} className='icon-mobile icon-mobile-close' ><CgClose /></i>
                    <div className='link-nav link-nav-mobile'>
                        <a href='#ABOUTME'>ОБО МНЕ</a>
                        {/* <a href='#PORTFOLIO'>ПОРТФОЛИО</a> */}
                        <a href='#УСЛУГИ'>УСЛУГИ</a>
                        <a href='#CONTACTS'>КОНТАКТЫ</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
