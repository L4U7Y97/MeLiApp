import React from 'react'
import { Circles } from 'react-loader-spinner'

interface SuspensePageLoaderProps extends Omit<React.SuspenseProps, 'fallback'>{
    loaderProps?: React.ComponentProps<typeof Circles>;
}

function SuspensePageLoader({loaderProps, ...props}: SuspensePageLoaderProps) {
  return (
    <React.Suspense fallback={<div><Circles {...loaderProps}/></div>} {...props}/>
  )
}

export default SuspensePageLoader