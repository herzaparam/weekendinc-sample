import React from 'react'

import style from './CardTestimonial.module.css'

function CardTestimonial() {
    return (
        <div className={style["card"]}>
            <h2 className={style["card-title"]}>Blue Kicks</h2>
            <p className={style["card-desc"]}>Places where you can leverage tools and software to free up time to focus on growing the business.</p>
        </div>
    )
}

export default CardTestimonial
