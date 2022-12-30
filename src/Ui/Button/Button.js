import React from 'react'
import './Button.css'

function MyButton(props) {
    return (
        <button {...props} >
            {props.children}
        </button>
    )
}

export default MyButton
