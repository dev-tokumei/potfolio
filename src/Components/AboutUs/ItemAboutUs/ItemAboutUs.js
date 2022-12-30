import React from 'react'
import './ItemAboutUs.css'

function ItemAboutUs(props) {
    return (
        <div data-aos="zoom-out-up" data-aos-duration='1000' className='card-about-us' >
            <h2>{props.name}</h2>
            <p>{props.body}</p>
            <i>{props.icon}</i>
        </div>
    )
}

export default ItemAboutUs
