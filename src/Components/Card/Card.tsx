import React, { ComponentProps } from 'react'
import './Card.sass'
function Card({className = '', ...props}: ComponentProps<'div'>) {
    return (
        <div className={`Card ${className}`} {...props} />
    )
}

export default Card