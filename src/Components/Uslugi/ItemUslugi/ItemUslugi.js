import React from 'react'
import './ItemUslugi.css'
import MyButton from '../../../Ui/Button/Button'
import { IoArrowRedoOutline } from 'react-icons/io5'

function ItemUslugi(props) {
    return (
        <div data-aos="zoom-out-up" data-aos-duration='1000' className='uslugi-item'>
            <div className='head' >
                <h3>{props.name}</h3>
                <p>{props.day}</p>
            </div>
            <h2><span>от</span> {props.price}</h2>
            <div className='list-uslugi' >
                <p><i><IoArrowRedoOutline /></i> {props.howPage}</p>
                <p><i><IoArrowRedoOutline /></i>{props.test}</p>
                <p><i><IoArrowRedoOutline /></i>{props.mobile}</p>
            </div>
            <a href="https://xn--80affa3aj0al.xn--80asehdb/#@faridun010"><MyButton>Заказать</MyButton></a>
        </div>
    )
}

export default ItemUslugi
