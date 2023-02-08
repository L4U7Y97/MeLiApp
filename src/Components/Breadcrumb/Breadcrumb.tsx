import React, {ComponentProps} from 'react'
import './Breadcrumb.sass'

interface BreadcrumbProps extends ComponentProps<'div'>{
    paths: string[]
}

function Breadcrumb({ paths, className = '', ...props }: BreadcrumbProps) {
  return (
    <div className={`BreadcrumbContainer ${className}`} {...props}>{
        paths.map((path, index) => <span className={`GreyText ${index < paths.length -1 ? 'BreadcrumbDivider' : ''}`}>{path}</span>)
    }</div>
  )
}

export default Breadcrumb