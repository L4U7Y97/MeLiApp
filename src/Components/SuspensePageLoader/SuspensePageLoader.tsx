import React from 'react'
import { Circles } from 'react-loader-spinner'
import { Await, AwaitProps } from '../../utils/routerUtils';

interface SuspensePageLoaderProps<T> extends Omit<React.SuspenseProps, 'fallback' | 'children'>, AwaitProps<T>{
    loaderProps?: React.ComponentProps<typeof Circles>;
}

function SuspensePageLoader<T>({loaderProps, children, resolve, errorElement, ...props}: SuspensePageLoaderProps<T>) {
  return (
    <React.Suspense fallback={<Circles color='blue' {...loaderProps}/>} {...props}>
      <Await resolve={resolve} errorElement={errorElement}>
        {children}
      </Await>
    </React.Suspense>
  )
}

export default SuspensePageLoader