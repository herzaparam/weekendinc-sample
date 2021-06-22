import React from 'react'

import style from './CardTestimonial.module.css'

function CardTestimonial({ testimonial, by }) {
    return (
        <div className={style["card"]}>
            <h2 className={style["card-title"]}>{by}</h2>
            <p className={style["card-desc"]}>{testimonial}</p>
        </div>
    )
}

export default CardTestimonial
