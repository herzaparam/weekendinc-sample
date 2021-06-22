import React from 'react'
import style from './CardHelp.module.css'
import { arrow } from '../../images'

function CardHelp({ image, title }) {
    return (
        <div className={style["card"]} style={{ backgroundImage: `url("${image}")` }}>
            <div className={style["bot-sect"]}>
                <h5 className={style["h5-title"]}>{title}</h5>
                <button className={style["btn-card-help"]}><img src={arrow} alt="" className={style["img-arr-btn"]} /></button>
            </div>
        </div>
    )
}

export default CardHelp
