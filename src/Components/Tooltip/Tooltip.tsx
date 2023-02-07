import React, { PropsWithChildren } from 'react'
import './Tooltip.sass'

interface TooltipProps extends PropsWithChildren {
    text: string
}

function Tooltip({children, text}: TooltipProps) {
    return (
        <div className="tooltip">
            {children}
            <span className="tooltiptext">{text}</span>
        </div>
    )
}

export default Tooltip