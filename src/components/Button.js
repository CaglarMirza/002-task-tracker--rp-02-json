import React from 'react'

const Button = ({ toggleShow, color, text }) => {
    // const handleClick = () => {
    //     console.log("click with handle click func");
    // }


    return (
        <div>
            <button className='btn' style={{ backgroundColor: color }} onClick={toggleShow}>{text}</button>
        </div>
    )
}

export default Button
