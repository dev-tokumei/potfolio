import React from 'react'
import './AboutUs.css'
import { HiOutlineClipboardList } from 'react-icons/hi'
import ItemAboutUs from './ItemAboutUs/ItemAboutUs'
import { BsQuestion } from 'react-icons/bs'
import { AiOutlineTool } from 'react-icons/ai'
import { TbHeartHandshake } from 'react-icons/tb'

const itemCard = [
    {
        name: "КТО Я?",
        body: "Приветствую 👋 Меня зовут Faridun, я занимаюсь веб-разработкой. За плечами имею больше 3-х лет опыта в разработке сайтов и веб-приложений.Всегда акцентирую внимание на User Experience и написании чистого, доступного, гибкого кода",
        icon: <BsQuestion />
    },

    {
        name: "МОИ НАВЫКИ",
        body: "Мой стек технологий, которые я использую: - HTML - CSS, - Javascript, - React - Bootstarp, Redux, Redux-toolkit, TypeScript, Ant-design, Ui-materila, Next Js",
        icon: <AiOutlineTool />
    },

    {
        name: "СОТРУДНИЧЕСТВО",
        body: "Я предоставляю услуги по созданию лендингов, многостраничных сайтов, веб-приложений, HTML писем, оптимизации и редактированию уже существующего кода.",
        icon: <TbHeartHandshake />
    },
]

function AboutUs() {
    return (
        <div id='ABOUTME' className='about-us' >
            <div className='conteiner-linear'>
                <h1 className='heading-about' >ОБО МНЕ <i><HiOutlineClipboardList /></i> </h1>
                <div className='flex-about-us'>
                    {
                       itemCard.map((item, index) =>  <ItemAboutUs key={index} {...item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs
