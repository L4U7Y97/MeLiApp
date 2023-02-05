import React from 'react'
import { Circles } from 'react-loader-spinner'

interface SuspensePageLoaderProps extends Omit<React.SuspenseProps, 'fallback'>{
    loaderProps?: React.ComponentProps<typeof Circles>;
}

function SuspensePageLoader({loaderProps, ...props}: SuspensePageLoaderProps) {
  return (
    <React.Suspense fallback={<Circles color='blue' {...loaderProps}/>} {...props}/>
  )
}

export default SuspensePageLoader