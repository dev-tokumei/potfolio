import React from 'react'
import './Footer.css'
import { BsTelephoneForward } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'
import { BsTelegram } from 'react-icons/bs'

function Footer() {
    return (
        <footer id='CONTACTS' >
            <div className='conteiner-linear'>
                <div className='flex-footer'>
                    <div>
                        <h3 className='h3-footer' >Автор дизайна и разработки - Бегиджонов Фаридун</h3>
                        <p className='lorem-footer' >© 2023 Все права защищены</p>
                    </div>
                    <div className='logo-footer'>
                        <h3 className='h3-footer' ><i><BsTelephoneForward /></i> 502227374</h3>
                    </div>
                    <div>
                        <a href='#'><h3 className='h3-footer' ><i><SiInstagram /></i>Instagram</h3></a>
                    </div>
                    <div>
                        <a href="#"><h3 className='h3-footer' ><i><BsTelegram /></i>Telegram</h3></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
