import React from 'react'
import MyButton from '../../Ui/Button/Button'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { BsPlusLg } from 'react-icons/bs'
import Arrow from '../../Ui/Arrow/Arrow'

function Header() {
    return (
        <header>
            <Navbar />
           <div className='banner conteiner-linear' >
           <div className='container2'>
                <p>Привет Я Faridun</p>
           </div>
            <div >
            <div className='container'>
                <p>Привет Я</p>
                <section class="animation">
                    <div class="first"><div>Faridun</div></div>
                    <div class="second"><div>Специалист по Front-end</div></div>
                    <div class="third"><div>System</div></div>
                </section>
            </div>
            <p className='lorem-banner' >Специалист по Front-end и многому другому</p>
            <a href='#УСЛУГИ'><MyButton>Заказать</MyButton></a>
            <Arrow />
           </div>
            </div>
           <div className='decor-banner' >
                <i><BsPlusLg /></i>
                <i><BsPlusLg /></i>
                <i><BsPlusLg /></i>
                <i><BsPlusLg /></i>
           </div>
        </header>
    )
}

export default Header
