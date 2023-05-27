import React from 'react'

import style from '../assets/Header.module.css'

const Header = () => {
    return (
        <div className={style.Header}>
            <h1>Multi Factor Authentication</h1>
            <p>Two factor codes</p>
        </div>
    )
}

export default Header