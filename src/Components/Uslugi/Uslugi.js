import React from 'react'
import ItemUslugi from './ItemUslugi/ItemUslugi'
import './Uslugi.css'
import { MdOutlinePriceCheck } from 'react-icons/md'
 

const itemuslug = [
    {
        name: "LANDING PAGE",
        day: "ОТ 3 ДНЕЙ",
        price: "10$",
        howPage: "Количество страниц дизайна: 1",
        test: "Тестовый период: 7 дней",
        mobile: "Адаптивный сайт",
    },
    {
        name: "ИНТЕРНЕТ МАГАЗИН",
        day: "ОТ 14 ДНЕЙ",
        price: "20$",
        howPage: "Количество страниц дизайна: 12",
        test: "Тестовый период: 14 дней",
        mobile: "Адаптивный сайт",
    },
    {
        name: "КОРПОРАТИВНЫЙ САЙТ",
        day: "ОТ 7 ДНЕЙ",
        price: "20$",
        howPage: "Количество страниц дизайна: 4-8",
        test: "Тестовый период: 7 дней",
        mobile: "Адаптивный сайт",
    },
]


function Uslugi() {
    return (
        <div id='УСЛУГИ' className='conteiner-linear'>
            <h2 className='heading-about'>Услуги <i><MdOutlinePriceCheck /></i></h2>
            <div className='flex-uslugi'>
                {
                    itemuslug.map((item, index) => <ItemUslugi key={index} {...item} />)
                }
            </div>
        </div>
    )
}

export default Uslugi
